import { CommonApi } from "../CommonApi"
import { IPageQuery } from "../Interface"

export default class SheetMetalAssignmentApi extends CommonApi<
  ISheetMetalAssignmentAdd,
  ISheetMetalAssignmentRes,
  ISheetMetalAssignmentQuery
> {
  constructor() {
    super("/api/produce/v1/produceSheetmetal")
  }
}

export interface ISheetMetalAssignmentQuery extends IPageQuery {
  name?: string
  birthday?: string
  sex?: number
}
export interface ISheetMetalAssignmentAdd {
  fieldName: string
  fieldCode: string
}
export interface ISheetMetalAssignmentRes extends ISheetMetalAssignmentAdd {
  id: number
}
