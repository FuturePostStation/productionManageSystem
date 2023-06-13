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
  id: number
}
