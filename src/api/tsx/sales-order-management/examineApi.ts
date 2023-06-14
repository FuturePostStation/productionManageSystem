import { CommonApi } from "../CommonApi"
import { IPageQuery } from "../Interface"

export default class ExamineApi extends CommonApi<IExamineAdd, IExamineRes, IExamineQuery> {
  constructor() {
    super("/api/sale/v1/sysSaleAudit")
  }
}

export interface IExamineQuery extends IPageQuery {
  name?: string
  birthday?: string
  sex?: number
}
export interface IExamineAdd {
  fieldName: string
  fieldCode: string
}
export interface IExamineRes extends IExamineAdd {
  auditLeader: number
  contractAmount: number
  createTime: string
  createUser: string
  saleAuditId: string
  saleOrderId: string
  signTime: string
  status: number
  updateTime: string
}
