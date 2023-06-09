/*
 * @Author: tzx_sujie 1354146900@qq.com
 * @Date: 2023-05-18 18:26:34
 * @LastEditors: tzx_sujie 1354146900@qq.com
 * @LastEditTime: 2023-06-09 21:45:33
 */
/**
 * Author: 从前慢 330109371@qq.com
 * Date: 2023-05-16 17:08:26
 * LastEditors: 从前慢 330109371@qq.com
 * LastEditTime: 2023-05-17 10:02:51
 */
import { IPageQuery } from "./Interface"
import { CommonApi } from "./CommonApi"

export default class TempApi extends CommonApi<ITempAdd, ITempRes, ITempQuery> {
  constructor() {
    super("/demo")
  }

  public async page() {
    return {
      total: 2,
      pages: 1,
      list: [
        { fieldName: "asds", fieldCode: "sfsd", id: 1 },
        { fieldName: "asds2112", fieldCode: "sfsasdd", id: 2 }
      ]
    }
    // return request<IPage<ITempRes>>({ url: `${this.urlPrefix}/page`, method: "get", params })
  }
}

export interface ITempQuery extends IPageQuery {
  name?: string
  birthday?: string
  sex?: number
}
export interface ITempAdd {
  fieldName: string
  fieldCode: string
}
export interface ITempRes extends ITempAdd {
  id: number
}
