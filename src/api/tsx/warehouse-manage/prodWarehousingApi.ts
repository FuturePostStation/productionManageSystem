import { CommonApi } from "../CommonApi"
import { IPageQuery } from "../Interface"

export default class ProdWarehousingApi extends CommonApi<
  IProdWarehousingAdd,
  IProdWarehousingRes,
  IProdWarehousingQuery
> {
  constructor() {
    super("/api/godown/v1/godownProductWarehousing")
  }
}

export interface IProdWarehousingQuery extends IPageQuery {
  name?: string
  birthday?: string
  sex?: number
}
export interface IProdWarehousingAdd {
  fieldName: string
  fieldCode: string
}
export interface IProdWarehousingRes extends IProdWarehousingAdd {
  createTime: string
  createUser: string
  depositor: string
  estimatedCost: number
  matterId: string
  productCategories: string
  productInformationId: string
  productName: string
  productNumber: string
  productWarehousingId: string
  productWarehousingNumber: string
  productionOrderId: string
  specificationModel: string
  status: number
  storagePosition: string
  updateTime: string
  updateUser: string
  warehousingQuantity: number
  warehousingTime: string
  warehousionRemarks: string
}
