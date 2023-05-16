import { ElLoading, LoadingOptions } from "element-plus"
import { LoadingInstance } from "element-plus/es/components/loading/src/loading"

/**全屏加载状态管理助手 */
export class MyLoading {
  private com?: LoadingInstance
  private time: NodeJS.Timeout

  /**
   *
   * @param bufferTime 缓冲时间 超过此时间才显示加载状态 默认300ms
   */
  constructor()
  constructor(time: number)
  constructor(options: LoadingOptions)
  constructor(options: LoadingOptions, time: number)
  constructor(params?: number | LoadingOptions, time?: number) {
    let timeout, option: any
    if (typeof params == "number") {
      timeout = params
      option = {}
    } else if (typeof params == "object") {
      option = params
      timeout = time || 300
    } else {
      timeout = time || 300
      option = {}
    }
    this.time = setTimeout(() => {
      this.com = ElLoading.service(option)
    }, timeout)
  }

  public close() {
    clearTimeout(this.time)
    if (this.com) this.com.close()
  }
}
