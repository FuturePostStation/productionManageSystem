import { CommonApi } from "../CommonApi"
import { IPageQuery } from "../Interface"

export default class ProdOrderMaintenanceApi extends CommonApi<
  IProdOrderMaintenanceAdd,
  IProdOrderMaintenanceRes,
  IProdOrderMaintenanceQuery
> {
  constructor() {
    super("/api/produce/v1/sysProductionOrder")
  }
}

export interface IProdOrderMaintenanceQuery extends IPageQuery {
  name?: string
  birthday?: string
  sex?: number
}
export interface IProdOrderMaintenanceAdd {
  createTime: string
  createUser: string
  deliveryMode: string
  deliveryTime: string
  otherInformation: string
  produceCompletionTime: string
  produceCreateTime: string
  produceOrderName: string
  produceOrderNumber: string
  productName: string
  productQuantity: number
  salesOrderId: string
  status: number
  updateTime: string
  updateUser: string
  whetherStandard: number
}
export interface IProdOrderMaintenanceRes extends IProdOrderMaintenanceAdd {
  produceOrderId: string
}
