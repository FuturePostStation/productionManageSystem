import { request } from "@/utils/service"
import { IPage, IPageSort } from "./Interface"

export class CommonApi<AddT, RetT = AddT, Query = IPageSort> {
  public urlPrefix: string

  constructor(urlPrefix: string) {
    this.urlPrefix = urlPrefix
  }

  public add(data: AddT) {
    return request<RetT>({ url: `${this.urlPrefix}`, method: "post", data })
  }

  public edit(data: Partial<RetT>) {
    return request<RetT>({ url: `${this.urlPrefix}`, method: "put", data })
  }

  public delete(id: string) {
    return request({ url: `${this.urlPrefix}/${id}`, method: "delete" })
  }

  public details(id: string) {
    return request<RetT>({ url: `${this.urlPrefix}Info/${id}`, method: "get", params: { id } })
  }

  public page(params?: Query) {
    return request<IPage<RetT>>({ url: `${this.urlPrefix}/page`, method: "post", data: params })
  }
}
