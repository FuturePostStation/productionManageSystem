import { CommonApi } from "../CommonApi"
import { IPageQuery } from "../Interface"

export default class MaterialOutboundApi extends CommonApi<
  IMaterialOutboundAdd,
  IMaterialOutboundRes,
  IMaterialOutboundQuery
> {
  constructor() {
    super("/api/godown/v1/godownMaterialDelivery")
  }
}

export interface IMaterialOutboundQuery extends IPageQuery {
  name?: string
  birthday?: string
  sex?: number
}
export interface IMaterialOutboundAdd {
  fieldName: string
  fieldCode: string
}
export interface IMaterialOutboundRes extends IMaterialOutboundAdd {
  createTime: number
  createUser: number
  depositor: number
  materialWarehousingId: number
  produceOrderId: number
  remarks: number
  status: number
  updateTime: number
  updateUser: number
  warechousingTime: number
  warehousingOrderNumber: number
}
