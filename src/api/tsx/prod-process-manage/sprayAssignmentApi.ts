import { CommonApi } from "../CommonApi"
import { IPageQuery } from "../Interface"

export default class SprayAssignmentApi extends CommonApi<
  ISprayAssignmentAdd,
  ISprayAssignmentRes,
  ISprayAssignmentQuery
> {
  constructor() {
    super("/api/produce/v1/produceSpraying")
  }
}

export interface ISprayAssignmentQuery extends IPageQuery {
  name?: string
  birthday?: string
  sex?: number
}
export interface ISprayAssignmentAdd {
  fieldName: string
  fieldCode: string
}
export interface ISprayAssignmentRes extends ISprayAssignmentAdd {
  id: number
}
