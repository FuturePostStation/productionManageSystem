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
  createTime: string
  createUser: string
  matterBatch: string
  matterId: string
  matterModel: string
  matterName: string
  matterNote: string
  matterPackage: number
  matterPosition: string
  matterPrice: string
  matterQuantity: number
  matterReorderSum: number
  matterType: number
  matterUnit: number
  reorderId: string
  reorderNote: string
  reorderNumber: string
  reorderPerson: string
  reorderTime: string
  status: number
  updateTime: string
  updateUser: string
}
