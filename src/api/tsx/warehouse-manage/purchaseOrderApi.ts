import { CommonApi } from "../CommonApi"
import { IPageQuery } from "../Interface"

export default class PurchaseOrderApi extends CommonApi<IPurchaseOrderAdd, IPurchaseOrderRes, IPurchaseOrderQuery> {
  constructor() {
    super("/api/purchase/v1/sysSalesOrder")
  }
}

export interface IPurchaseOrderQuery extends IPageQuery {
  name?: string
  birthday?: string
  sex?: number
}
export interface IPurchaseOrderAdd {
  fieldName: string
  fieldCode: string
}
export interface IPurchaseOrderRes extends IPurchaseOrderAdd {
  boomQuantity: number
  category: string
  createTime: string
  createUser: string
  inventoryQuantity: number
  materialName: string
  produceOrderId: string
  produceOrderName: string
  produceOrderNumber: string
  producer: string
  purchaseDeliveryTime: string
  purchaseOrderId: string
  purchaseOrderNumber: string
  purchaseQuantity: number
  specification: string
  status: number
  updateTime: string
  updateUser: string
}
