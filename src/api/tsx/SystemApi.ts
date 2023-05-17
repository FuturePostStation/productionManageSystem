import { request } from "@/utils/service"

export default class SystemApi {
  public getDict(code: string) {
    return request<Array<IDictRes>>({ url: `dict/dict/${code}`, method: "get", params: { code } })
  }

  public dynamicDict(url: string) {
    return request<AnyArray>({ url: `/common/api/${url}`, method: "get" })
  }
}
export interface IDictRes {
  label: string
  text: string
  title: string
  value: string
}
