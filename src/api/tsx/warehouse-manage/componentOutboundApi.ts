import { CommonApi } from "../CommonApi"
import { IPageQuery } from "../Interface"

export default class ComponentOutboundApi extends CommonApi<
  IComponentOutboundAdd,
  IComponentOutboundRes,
  IComponentOutboundQuery
> {
  constructor() {
    super("/api/godown/v1/godownComponentDelivery")
  }
}

export interface IComponentOutboundQuery extends IPageQuery {
  name?: string
  birthday?: string
  sex?: number
}
export interface IComponentOutboundAdd {
  fieldName: string
  fieldCode: string
}
export interface IComponentOutboundRes extends IComponentOutboundAdd {
  id: number
}
