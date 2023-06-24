/**
 * Author: pwl330109371 330109371@qq.com
 * Date: 2023-06-24 18:59:00
 * LastEditors: pwl330109371 330109371@qq.com
 * LastEditTime: 2023-06-24 20:21:07
 */
import { CommonApi } from "@/api/tsx/CommonApi.js"

// import { IResponse, request } from "@/utils/service"
import { IPageQuery } from "@/api/tsx/Interface"

export default class OriginApi extends CommonApi<OriginAdd, OriginRes, OriginQuery> {
  constructor() {
    super("/api/system/v1/sysOrg")
  }
}

export interface OriginQuery extends IPageQuery {
  name?: string
  birthday?: string
  sex?: number
}
export interface OriginAdd {
  isParent: number
  orgCode: string
  orgDescribe: string
  orgId: string
  orgLat: string
  orgLevel: number
  orgLng: string
  orgMername: string
  orgName: string
  orgParent: string
  orgPath: string
  orgPinyin: string
  orgSeq: 0
  orgSname: string
}
export interface OriginRes extends OriginAdd {
  createTime: string
  createUser: string
  paymentTime: string
  saleOrderId: string
  status: number
  updateTime: string
  updateUser: string
}
