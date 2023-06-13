import { CommonApi } from "../CommonApi"
import { IPageQuery } from "../Interface"

export default class ComponentWarehousingApi extends CommonApi<
  IComponentWarehousingAdd,
  IComponentWarehousingRes,
  IComponentWarehousingQuery
> {
  constructor() {
    super("/api/godown/v1/godownComponentWarehousing")
  }
}

export interface IComponentWarehousingQuery extends IPageQuery {
  name?: string
  birthday?: string
  sex?: number
}
export interface IComponentWarehousingAdd {
  fieldName: string
  fieldCode: string
}
export interface IComponentWarehousingRes extends IComponentWarehousingAdd {
  id: number
}
