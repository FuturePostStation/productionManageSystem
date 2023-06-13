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
  id: number
}
