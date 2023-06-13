import { CommonApi } from "../CommonApi"
import { IPageQuery } from "../Interface"

export default class MaterialWarehousingApi extends CommonApi<
  IMaterialWarehousingAdd,
  IMaterialWarehousingRes,
  IMaterialWarehousingQuery
> {
  constructor() {
    super("/api/godown/v1/godownMaterialWarehousing")
  }
}

export interface IMaterialWarehousingQuery extends IPageQuery {
  name?: string
  birthday?: string
  sex?: number
}
export interface IMaterialWarehousingAdd {
  fieldName: string
  fieldCode: string
}
export interface IMaterialWarehousingRes extends IMaterialWarehousingAdd {
  id: number
}
