import { CommonApi } from "../CommonApi"
import { IPageQuery } from "../Interface"

export default class OrderAuditApi extends CommonApi<IOrderAuditAdd, IOrderAuditRes, IOrderAuditQuery> {
  constructor() {
    super("/api/sale/v1/sysSaleAudit")
  }
}

export interface IOrderAuditQuery extends IPageQuery {
  name?: string
  birthday?: string
  sex?: number
}
export interface IOrderAuditAdd {
  fieldName: string
  fieldCode: string
}
export interface IOrderAuditRes extends IOrderAuditAdd {
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
