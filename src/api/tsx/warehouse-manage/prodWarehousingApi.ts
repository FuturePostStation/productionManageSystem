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
  id: number
}
