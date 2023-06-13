import { CommonApi } from "../CommonApi"
import { IPageQuery } from "../Interface"

export default class ComponentManageApi extends CommonApi<
  IComponentManageAdd,
  IComponentManageRes,
  IComponentManageQuery
> {
  constructor() {
    super("/api/godown/v1/godownComponentInfo")
  }
}

export interface IComponentManageQuery extends IPageQuery {
  name?: string
  birthday?: string
  sex?: number
}
export interface IComponentManageAdd {
  fieldName: string
  fieldCode: string
}
export interface IComponentManageRes extends IComponentManageAdd {
  id: number
}
