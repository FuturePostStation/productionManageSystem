import { CommonApi } from "../CommonApi"
import { IPageQuery } from "../Interface"

export default class ProdOutboundApi extends CommonApi<IProdOutboundAdd, IProdOutboundRes, IProdOutboundQuery> {
  constructor() {
    super("/api/godown/v1/godownProductDelivery")
  }
}

export interface IProdOutboundQuery extends IPageQuery {
  name?: string
  birthday?: string
  sex?: number
}
export interface IProdOutboundAdd {
  fieldName: string
  fieldCode: string
}
export interface IProdOutboundRes extends IProdOutboundAdd {
  id: number
}
