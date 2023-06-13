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
  fieldName: string
  fieldCode: string
}
export interface IProdOrderMaintenanceRes extends IProdOrderMaintenanceAdd {
  id: number
}
