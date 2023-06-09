import { CommonApi } from "../CommonApi"
import { IPageQuery } from "../Interface"

export default class TechnologicalDesignApi extends CommonApi<
  ITechnologicalDesignAdd,
  ITechnologicalDesignRes,
  ITechnologicalDesignQuery
> {
  constructor() {
    super("/api/produce/v1/produceDesign")
  }
}

export interface ITechnologicalDesignQuery extends IPageQuery {
  name?: string
  birthday?: string
  sex?: number
}
export interface ITechnologicalDesignAdd {
  fieldName: string
  fieldCode: string
}
export interface ITechnologicalDesignRes extends ITechnologicalDesignAdd {
  componentName: string
  createTime: string
  createUser: string
  designSubmissionTime: string
  inventory: string
  materialName: string
  number: number
  processDesignId: string
  produceOrderId: string
  productName: string
  status: number
  updateTime: string
  updateUser: string

  pdfList: AnyArray
}
