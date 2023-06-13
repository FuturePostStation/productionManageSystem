import { CommonApi } from "../CommonApi"
import { IPageQuery } from "../Interface"

export default class StageProductDeliveryApi extends CommonApi<
  IStageProductDeliveryAdd,
  IStageProductDeliveryRes,
  IStageProductDeliveryQuery
> {
  constructor() {
    super("/api/produce/v1/produceStageDelivery")
  }
}

export interface IStageProductDeliveryQuery extends IPageQuery {
  name?: string
  birthday?: string
  sex?: number
}
export interface IStageProductDeliveryAdd {
  fieldName: string
  fieldCode: string
}
export interface IStageProductDeliveryRes extends IStageProductDeliveryAdd {
  id: number
}
