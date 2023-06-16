import { CommonApi } from "../CommonApi"
import { IPageQuery } from "../Interface"

export default class IncomingProductInspectionApi extends CommonApi<
  IIncomingProductInspectionAdd,
  IIncomingProductInspectionRes,
  IIncomingProductInspectionQuery
> {
  constructor() {
    super("/api/produce/v1/produceIncomingInspection")
  }
}

export interface IIncomingProductInspectionQuery extends IPageQuery {
  name?: string
  birthday?: string
  sex?: number
}
export interface IIncomingProductInspectionAdd {
  fieldName: string
  fieldCode: string
}
export interface IIncomingProductInspectionRes extends IIncomingProductInspectionAdd {
  accumulativeReceiveQuantity: number
  actualReceiveQuentity: number
  createTime: string
  createUser: string
  incomingInspectionId: string
  orderDeliveryQuantity: number
  produceOrderId: string
  status: number
  updateTime: string
  updateUser: string
}
