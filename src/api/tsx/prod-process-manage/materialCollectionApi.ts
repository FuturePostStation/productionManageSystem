import { CommonApi } from "../CommonApi"
import { IPageQuery } from "../Interface"

export default class MaterialCollectionApi extends CommonApi<
  IMaterialCollectionAdd,
  IMaterialCollectionRes,
  IMaterialCollectionQuery
> {
  constructor() {
    super("/api/produce/v1/produceMaterialClaim")
  }
}

export interface IMaterialCollectionQuery extends IPageQuery {
  name?: string
  birthday?: string
  sex?: number
}
export interface IMaterialCollectionAdd {
  fieldName: string
  fieldCode: string
}
export interface IMaterialCollectionRes extends IMaterialCollectionAdd {
  id: number
}
