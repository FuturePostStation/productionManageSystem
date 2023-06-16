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
  accomplishTime: string
  boomId: string
  createTime: string
  createUser: string
  finishedProductQuantity: number
  processName: string
  produceOrderId: string
  responsiblePerson: string
  sheetmetalId: string
  status: number
  updateTime: string
  updateUser: string
  workshopName: string
}
