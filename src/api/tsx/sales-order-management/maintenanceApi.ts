import { CommonApi } from "../CommonApi"
import { IPageQuery } from "../Interface"

export default class MaintenanceApi extends CommonApi<IMaintenanceAdd, IMaintenanceRes, IMaintenanceQuery> {
  constructor() {
    super("/api/sale/v1/sysSaleOrder")
  }
}

export interface IMaintenanceQuery extends IPageQuery {
  name?: string
  birthday?: string
  sex?: number
}
export interface IMaintenanceAdd {
  fieldName: string
  fieldCode: string
}
export interface IMaintenanceRes extends IMaintenanceAdd {
  contractAmount: number
  contractCloseTime: string
  contractEffectiveTime: string
  contractEndTime: string
  contractName: string
  contractType: number
  createTime: string
  createUser: string
  orderDownPayment: number
  otherInformation: string
  partyAName: string
  partyBName: string
  paymentTime: string
  saleOrderId: string
  saleOrderName: string
  saleOrderNumber: string
  status: number
  updateTime: string
  updateUser: string
  /**  */
  id: number
}
