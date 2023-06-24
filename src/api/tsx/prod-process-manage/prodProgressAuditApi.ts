import { CommonApi } from "../CommonApi"
import { IPageQuery } from "../Interface"

export default class ProdProgressAuditApi extends CommonApi<
  IProdProgressAuditAdd,
  IProdProgressAuditRes,
  IProdProgressAuditQuery
> {
  constructor() {
    super("/api/produce/v1/produceProgressAudit", false)
  }
}

export interface IProdProgressAuditQuery extends IPageQuery {
  name?: string
  birthday?: string
  sex?: number
}
export interface IProdProgressAuditAdd {
  fieldName: string
  fieldCode: string
}
export interface IProdProgressAuditRes extends IProdProgressAuditAdd {
  createTime: string
  createUser: string
  cumulativeNumberCompleted: number
  dailyCompletedQuantity: number
  produceOrderId: string
  progressAuditId: string
  status: number
  updateTime: string
  updateUser: string
}
