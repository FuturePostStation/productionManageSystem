import { CommonApi } from "../CommonApi"
import { IPageQuery } from "../Interface"

export default class ProdManageApi extends CommonApi<IProdManageAdd, IProdManageRes, IProdManageQuery> {
  constructor() {
    super("/api/godown/v1/godownProductInfo")
  }
}

export interface IProdManageQuery extends IPageQuery {
  name?: string
  birthday?: string
  sex?: number
}
export interface IProdManageAdd {
  fieldName: string
  fieldCode: string
}
export interface IProdManageRes extends IProdManageAdd {
  costUnitPrice: number
  createTime: string
  createUser: string
  owningBatch: string
  productCategory: string
  productInformationId: string
  productName: string
  productNumber: string
  productSubcategory: string
  productWarehousingId: string
  quantity: number
  remarks: string
  specificationModel: string
  status: number
  storageLocation: string
  supplierAbbreviation: string
  thresholdValue: number
  updateTime: string
  updateUser: string
}
