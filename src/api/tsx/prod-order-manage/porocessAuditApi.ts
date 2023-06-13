import { CommonApi } from "../CommonApi"
import { IPageQuery } from "../Interface"

export default class PorocessAuditApi extends CommonApi<IPorocessAuditAdd, IPorocessAuditRes, IPorocessAuditQuery> {
  constructor() {
    super("/api/produce/v1/produceProcessAudit")
  }
}

export interface IPorocessAuditQuery extends IPageQuery {
  name?: string
  birthday?: string
  sex?: number
}
export interface IPorocessAuditAdd {
  fieldName: string
  fieldCode: string
}
export interface IPorocessAuditRes extends IPorocessAuditAdd {
  id: number
}
