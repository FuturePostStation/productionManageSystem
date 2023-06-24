import { LoadStatus } from "@/components/tsx/MultiStatus"
import { MyLoading } from "@/utils/Loading"
import { hasId } from "@/utils/tools"
import { ElMessage, ElMessageBox } from "element-plus"
import { Pager } from "./Pager"

export class CommonHandler<T extends ICommonApi, R, Q> {
  constructor(api: T, pager?: Pager<T, R, Q>) {
    this.api = api
    this.pager = pager
  }
  private api!: T
  private pager?: Pager<T, R, Q>
  private _loadStatus = LoadStatus.loading
  private _error = null
  public onStatusChange?: (status: LoadStatus) => void
  public onError?: (err: Error) => boolean | void

  public get loadStatus() {
    return this._loadStatus
  }

  public get error() {
    return this._error
  }

  /**
   * 确认弹窗操作
   * @param str 提示语
   * @param id 默认传ID  执行删除操作
   * @param apiMethod 传 Api 方法则执行对应的方法
   * @param callback 其他操作
   * @param isRefresh 存在分页时, 是否自动刷新, 默认刷新
   */
  public confirmAction(str: string, id: string): void
  public confirmAction(str: string, apiMethod: Function): void
  public confirmAction(str: string, id: string, callback: Function): void
  public confirmAction(str: string, apiMethod: Function, callback: Function): void
  public confirmAction(str: string, apiMethod: Function, callback: Function, isRefresh: boolean): void
  public confirmAction(str: string, param: string | Function, exec?: Function, isRefresh = true) {
    ElMessageBox.confirm(str, "警告")
      .then(async () => {
        const loading = new MyLoading()
        try {
          if (typeof param == "function") {
            await param()
          } else if (typeof param == "string") {
            await this.api.delete!(param)
            ElMessage.success("删除成功")
          }
          isRefresh && this.pager && this.refresh()
          typeof exec == "function" && exec()
        } catch (error) {
          ElMessageBox.alert(`${error}`, { type: "error" })
        } finally {
          loading.close()
        }
      })
      .catch(() => {})
  }

  public async refresh(apiMethod?: Function): Promise<void>
  public async refresh(apiMethod: Function, callback?: Function): Promise<void>
  public async refresh(apiMethod?: Function, callback?: Function) {
    this._loadStatus = LoadStatus.loading
    try {
      if (this.pager) {
        await this.pager.refresh()
        if (typeof apiMethod === "function") await apiMethod()
        if (this.pager.currentPage == 1)
          this._loadStatus = this.pager.items.length ? LoadStatus.success : LoadStatus.empty
      } else {
        if (typeof apiMethod == "function") {
          await apiMethod()
          this._loadStatus = LoadStatus.success
        }
      }
      typeof callback == "function" && callback()
    } catch (error) {
      if (this.pager) {
        if (this.pager.currentPage == 1) {
          this._loadStatus = LoadStatus.failed
          this._error = error
          if (!(this.onError && this.onError(error))) {
            throw error
          }
        } else {
          ElMessageBox.alert(`${error}`, { type: "error" })
        }
      } else {
        this._loadStatus = LoadStatus.failed
        this._error = error
        if (!(this.onError && this.onError(error))) {
          throw error
        }
      }
    } finally {
      this.onStatusChange && this.onStatusChange(this._loadStatus)
    }
  }

  public async addOrEdit(ruleForm: R, idKey = "id") {
    const loading = new MyLoading()
    try {
      await this.api[hasId(ruleForm, idKey) ? "edit" : "add"]?.(ruleForm)
      ElMessage.success("操作成功")
      this.refresh()
      return true
    } catch (error) {
      console.log(error)
      ElMessageBox.alert(`${error}`, { type: "error" })
    } finally {
      loading.close()
    }
  }
}
interface ICommonApi {
  delete?: (id: any) => Promise<any>
  add?: (data: any) => Promise<any>
  edit?: (data: any) => Promise<any>
}
