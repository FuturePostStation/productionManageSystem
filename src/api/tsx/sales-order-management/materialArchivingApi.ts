import { CommonApi } from "../CommonApi"
import { IPageQuery } from "../Interface"

export default class MaterialArchivingApi extends CommonApi<
  IMaterialArchivingAdd,
  IMaterialArchivingRes,
  IMaterialArchivingQuery
> {
  constructor() {
    super("/api/sale/v1/sysMaterialFile", false)
  }
}

export interface IMaterialArchivingQuery extends IPageQuery {
  name?: string
  birthday?: string
  sex?: number
}
export interface IMaterialArchivingAdd {
  fieldName: string
  fieldCode: string
}
export interface IMaterialArchivingRes extends IMaterialArchivingAdd {
  saleOrderId: string
  materialFileId: string
}
