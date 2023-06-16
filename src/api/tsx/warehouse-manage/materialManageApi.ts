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
  createTime: string
  createUser: string
  matterAbbreviation: string
  matterBatch: string
  matterId: string
  matterModel: string
  matterName: string
  matterNotes: string
  matterNumber: string
  matterPackage: string
  matterPosition: string
  matterPrice: number
  matterType: number
  matterUnit: number
  matterValue: number
  status: number
  updateTime: string
  updateUser: string
}
