import { IPage } from "./Interface"
export type MethodType<Q, R> = (query: Q) => Promise<IPage<R>>

/**
 * 分页器
 * 自动管理分页状态
 */
export class Pager<T extends any, R, Q> {
  private _currentPage = 1
  private _loading = false
  private _pages = 1
  private _total = 0
  private method: MethodType<Q, R>
  private param?: () => Parameters<MethodType<Q, R>>[0]
  private wrongBeforePage = 1
  private _items: Array<R> = []
  private infinite?: boolean
  public readonly api: T

  /**获取或设置 每页条数 默认10 */
  public size = 10
  /**异常拦截器 如果返回true则将异常拦截 */
  public onError?: (err: Error) => boolean | void
  /**达到最后一页时触发 一般用于和infinite选项配合使用 或 访问noMore成员 */
  public onLastPage?: (page: number) => void
  /**请求成功时触发 */
  public onLoad?: (items: ReadonlyArray<R>) => void

  /**
   * 初始化分页器模型
   * @param apiMethod 传入API方法
   * @param param 执行API所需要的参数 如果有除page,size以外的参数则需要传参 回调方式
   * @param infinite 是否启用无限加载模式
   */
  constructor(api: T, method: MethodType<Q, R>, param?: () => Parameters<MethodType<Q, R>>[0], infinite?: boolean) {
    this.api = api
    this.method = method.bind(api)
    this.param = param
    this.infinite = infinite
  }

  /** 参数重置 */
  public reset(param: Parameters<MethodType<Q, R>>[0]) {
    this.param = () => param
  }

  /**当前页码 */
  public get currentPage() {
    return this._currentPage
  }

  /**Loading 状态 */
  public get loading() {
    return this._loading
  }

  /**总页码 */
  public get pages() {
    return this._pages
  }

  /**是否没有更多数据可加载 */
  public get noMore() {
    return this.currentPage >= this.pages
  }

  /**总条目 */
  public get total() {
    return this._total
  }

  /**上一页是否可用 */
  public get enablePrev() {
    return this.currentPage > 1
  }

  /**下一页是否可用 */
  public get enableNext() {
    return this.currentPage < this.pages
  }

  public get items(): Array<R> {
    return this._items
  }

  /**
   * 上一页
   * @throws 可能抛出HTTP异常 如果onError绑定了回调并返回true则不会接收到异常
   */
  public async prev() {
    if (this.enablePrev) {
      this.wrongBeforePage = this._currentPage--
      return await this._refresh()
    }
  }

  /**
   * 下一页
   * @throws 可能抛出HTTP异常 如果onError绑定了回调并返回true则不会接收到异常
   */
  public async next() {
    if (this.enableNext) {
      this.wrongBeforePage = this._currentPage++
      return await this._refresh()
    }
  }

  /**
   * 跳转到页码
   * @throws 可能抛出HTTP异常 如果onError绑定了回调并返回true则不会接收到异常
   */
  public async goto(page: number) {
    if (page >= 1 && page <= this.pages) {
      this.wrongBeforePage = this._currentPage
      this._currentPage = page
      return await this._refresh()
    }
  }

  /**
   * 刷新请求
   * @throws 可能抛出HTTP异常 如果onError绑定了回调并返回true则不会接收到异常
   */
  public async refresh() {
    return this._refresh(true)
  }

  private async _refresh(isRefresh = false) {
    this._loading = true
    try {
      if (isRefresh) this._currentPage = 1
      const params = () => {
        if (this.param) {
          const p = this.param() as any
          p.offset = this.currentPage
          p.limit = this.size
          return p
        } else {
          return {
            offset: this.currentPage,
            limit: this.size
          }
        }
      }
      const res = await this.method(params())
      console.log(res)
      if (this.pages === this.currentPage) this.onLastPage && this.onLastPage(this.currentPage)
      this._total = res.data.records
      this._pages = res.data.total
      if (this.infinite && !isRefresh) {
        this._items.push(...res.data.rows)
      } else {
        this._items = res.data.rows
      }
      this.onLoad && this.onLoad(res.data.rows)
      return res.data
    } catch (error) {
      console.log("pager err", error)
      this._currentPage = this.wrongBeforePage
      if (!(this.onError && this.onError(error))) {
        throw error
      }
    } finally {
      this._loading = false
    }
  }
}
