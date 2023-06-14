import { CommonApi } from "../CommonApi"
import { IPageQuery } from "../Interface"

export default class ContractMaintenanceApi extends CommonApi<
  IContractMaintenanceAdd,
  IContractMaintenanceRes,
  IContractMaintenanceQuery
> {
  constructor() {
    super("/api/sale/v1/sysExternalContract")
  }
}

export interface IContractMaintenanceQuery extends IPageQuery {
  name?: string
  birthday?: string
  sex?: number
}
export interface IContractMaintenanceAdd {
  fieldName: string
  fieldCode: string
}
export interface IContractMaintenanceRes extends IContractMaintenanceAdd {
  contractAmount: number
  contractSigningTime: string
  createTime: string
  createUser: string
  externalContractId: string
  externalContractName: string
  partyA: string
  partyB: string
  saleOrderId: string
  status: number
  updateTime: string
  updateUser: string
}
