import { CommonApi } from "../CommonApi"
import { IPageQuery } from "../Interface"

export default class MaterialManageApi extends CommonApi<IMaterialManageAdd, IMaterialManageRes, IMaterialManageQuery> {
  constructor() {
    super("/api/godown/v1/godownMaterialInfo")
  }
}

export interface IMaterialManageQuery extends IPageQuery {
  name?: string
  birthday?: string
  sex?: number
}
export interface IMaterialManageAdd {
  fieldName: string
  fieldCode: string
}
export interface IMaterialManageRes extends IMaterialManageAdd {
  id: number
}
