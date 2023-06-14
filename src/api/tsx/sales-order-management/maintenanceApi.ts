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
  contractAmount: number
  saleOrderName: string
  saleOrderNumber: string
  contractName: string
  contractType: number
  orderDownPayment: number
  partyAName: string
  partyBName: string
  contractEffectiveTime: string
  contractEndTime: string
  contractCloseTime: string
  otherInformation: string

  /** 交付材料 */
  amountCollected: number
  deliveryTime: string

  /** 本地扩展 */
  pdfList: AnyArray
}
export interface IMaintenanceRes extends IMaintenanceAdd {
  createTime: string
  createUser: string
  paymentTime: string
  saleOrderId: string
  status: number
  updateTime: string
  updateUser: string
  /**  */
  id: number
}
