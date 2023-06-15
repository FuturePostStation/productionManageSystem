import { CommonApi } from "@/api/tsx/CommonApi"
import { CommonHandler } from "@/api/tsx/CommonHander"
import { IPageSort } from "@/api/tsx/Interface"
import { MethodType, Pager } from "@/api/tsx/Pager"
import MyTable, { IColItem } from "@/components/tsx/MyTable"
import { DialogBase, IDialogConfig } from "@/components/tsx/dialog/DialogBase"
import { Plus } from "@element-plus/icons-vue"
import { ComponentObjectPropsOptions, PropType } from "vue"
import style from "./ListView.module.scss"
import MultiStatus from "./MultiStatus"
import { PageBase } from "./PageBase"
import SearchWidget from "./SearchWidget"

export default new (class ListView<
  Add,
  Res extends { id: number },
  Query extends IPageSort = IPageSort
> extends PageBase<IProps<Query>, IEvent, ISlots> {
  constructor() {
    super()
  }

  protected props: ComponentObjectPropsOptions<IProps<Query>> = {
    api: { type: Object as PropType<CommonApi<Add, Res, Query>> },
    method: Object,
    query: { type: Object as PropType<Query> },
    resetQuery: Function as PropType<() => Query>,
    tableConfig: {
      type: Object,
      default: () => {
        return {}
      }
    },
    dialogConfig: Object,
    addHandler: Function,
    editHandler: Function,
    notAdd: Boolean,
    idKey: { type: String, default: "id" }
  }
  public expose: (string | number)[] = ["refresh", "handler"]
  public emits: (keyof IEvent)[] = ["selectionChange"]

  private pager: Pager<CommonApi<Add, Res, Query>, Res, Query> = null as any
  public handler: CommonHandler<CommonApi<Add, Res, Query>, Res, Query> = null as any
  private columns: Dict<IColItem> = {}
  private buttonSize = "default"

  public async created() {
    this.pager = new Pager(this.api, this.method || this.api.page, () => this.query)
    this.pager.onError = (err) => {
      console.log(err)
      return true
    }
    this.handler = new CommonHandler(this.api, this.pager)
    await this.refresh()
  }

  public render(): JSX.Element {
    return (
      <div class="app-container">
        {this.searchNode()}
        <div class="mainBox">
          <div class={style.tableActBox}>
            <div class={style.action}>
              {!this.notAdd && (
                <el-button type="primary" icon={Plus} size={this.buttonSize} onClick={() => this.add()}>
                  新增
                </el-button>
              )}
              {this.$slots.tableHeadAct && this.$slots.tableHeadAct()}
            </div>
          </div>
          <MultiStatus loadStatus={this.handler.loadStatus} error={this.handler.error}>
            <MyTable
              tableData={this.pager}
              columns={this.columns}
              actionConfig={this.tableConfig?.actionConfig || { width: "120" }}
              onSelectionChange={this.selectionChange}
              v-slots={{ actionSlot: this.actionSlot }}
            />
          </MultiStatus>
        </div>
      </div>
    )
  }

  private searchNode() {
    const node = this.$slots.searchItems?.()
    if (node || (Array.isArray(node) && (node as AnyArray).length > 0)) {
      return (
        <SearchWidget
          v-slots={{ default: () => node, btns: this.$slots.searchBtns }}
          onSearch={() => this.refresh()}
          onReset={() => this.reset()}
        />
      )
    }
  }

  private actionSlot(scope: ElRow<Res>) {
    return [
      this.$slots.tableAction && this.$slots.tableAction(scope),
      !this.tableConfig!.notEdit && (
        <el-button type="primary" link onClick={() => this.edit(scope.row)}>
          编辑
        </el-button>
      ),
      !this.tableConfig!.notDel && (
        <el-button type="primary" link onClick={() => this.delete(scope.row)}>
          删除
        </el-button>
      )
    ]
  }

  public async refresh() {
    await this.handler.refresh()
    this.buildCol()
  }

  private buildCol() {
    this.columns = {}
    if (this.tableConfig?.setColumns) {
      this.tableConfig.setColumns(this.columns)
    } else {
      this.$alert("请配置表头")
    }
  }

  private add() {
    console.log("add")
    if (this.addHandler) {
      this.addHandler()
    } else {
      this.addOrEdit()
    }
  }

  private edit(item?: Res) {
    if (this.editHandler) {
      this.editHandler(item)
    } else {
      this.addOrEdit(item)
    }
  }

  private addOrEdit(item?: Res) {
    if (this.dialogConfig) {
      const dialog = new this.dialogConfig.editDialog()
      let config: IDialogConfig = { onConfirm: async (ruleForm: any) => this.handler.addOrEdit(ruleForm) }
      if (this.dialogConfig.editConfig) {
        config = {
          ...this.dialogConfig.editConfig,
          onConfirm: this.dialogConfig.editConfig.onConfirm || config.onConfirm
        }
      }
      dialog.show(item, config)
    }
  }

  private delete(item: Res) {
    this.handler.confirmAction("是否删除此数据?", (item as Dict)[this.idKey].toString())
  }

  private reset() {
    for (const key in this.query) {
      this.query[key] = null as any
    }
    if (this.resetQuery) {
      this.query = this.resetQuery()
    }
    this.pager.reset(this.query)
    this.handler.refresh()
  }

  private selectionChange(val: Array<Res>) {
    this.$emit("selectionChange", val)
  }
})()

interface IProps<Q> {
  /** 插槽声明 目前还未找到 v-slots 的类型关联声明 */
  vSlots?: keyof ISlots

  api: CommonApi<any>
  /** 列表请求的其他方法 默认page */
  method?: MethodType<any, any>
  /** 查询参数 */
  query: Q
  /** 重置 外部处理 */
  resetQuery?: () => Q
  idKey: string

  /** 表格配置 */
  tableConfig?: {
    /** 默认显示编辑删除按钮 */
    notEdit?: boolean
    notDel?: boolean
    setColumns?: (colums: Dict<IColItem>) => void
    actionConfig?: IColItem
  }

  /** 弹窗配置 */
  dialogConfig?: {
    editDialog: IDialogType
    editConfig?: IDialogConfig
  }
  notAdd?: boolean
  /** 新增 外部处理 */
  addHandler?: Function
  /** 编辑 外部处理 */
  editHandler?: Function
}
type IEvent = {
  selectionChange: (v: AnyArray) => void
}
interface ISlots {
  searchItems?: () => TsxEl
  searchBtns?: () => TsxEl
  tableHeadAct?: () => TsxEl
  tableAction?: (scope: ElRow) => TsxEl
}
type IDialogType = {
  new (...args: any): DialogBase
}
