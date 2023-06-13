import { CommonApi } from "../CommonApi"
import { IPageQuery } from "../Interface"

export default class ProdManageApi extends CommonApi<IProdManageAdd, IProdManageRes, IProdManageQuery> {
  constructor() {
    super("/api/godown/v1/godownProductInfo")
  }
}

export interface IProdManageQuery extends IPageQuery {
  name?: string
  birthday?: string
  sex?: number
}
export interface IProdManageAdd {
  fieldName: string
  fieldCode: string
}
export interface IProdManageRes extends IProdManageAdd {
  id: number
}
