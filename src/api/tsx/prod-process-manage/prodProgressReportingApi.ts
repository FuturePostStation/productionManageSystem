import { CommonApi } from "../CommonApi"
import { IPageQuery } from "../Interface"

export default class ProdProgressReportingApi extends CommonApi<
  IProdProgressReportingAdd,
  IProdProgressReportingRes,
  IProdProgressReportingQuery
> {
  constructor() {
    super("/api/produce/v1/produceReporting")
  }
}

export interface IProdProgressReportingQuery extends IPageQuery {
  name?: string
  birthday?: string
  sex?: number
}
export interface IProdProgressReportingAdd {
  fieldName: string
  fieldCode: string
}
export interface IProdProgressReportingRes extends IProdProgressReportingAdd {
  createTime: string
  createUser: string
  cumulativeNumberCompleted: number
  dailyCompletedQuantity: number
  produceOrderId: string
  reportingId: string
  status: number
  updateTime: string
  updateUser: string
}
