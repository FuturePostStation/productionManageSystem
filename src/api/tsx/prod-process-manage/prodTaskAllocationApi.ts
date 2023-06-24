import { CommonApi } from "../CommonApi"
import { IPageQuery } from "../Interface"

export default class ProdTaskAllocationApi extends CommonApi<
  IProdTaskAllocationAdd,
  IProdTaskAllocationRes,
  IProdTaskAllocationQuery
> {
  constructor() {
    super("/api/produce/v1/processFlow")
  }
}

export interface IProdTaskAllocationQuery extends IPageQuery {
  name?: string
  birthday?: string
  sex?: number
}
export interface IProdTaskAllocationAdd {
  fieldName: string
  fieldCode: string
}
export interface IProdTaskAllocationRes extends IProdTaskAllocationAdd {
  produceOrderId: string
}
