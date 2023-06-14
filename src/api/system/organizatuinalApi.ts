/**
 * Author: pwl330109371 330109371@qq.com
 * Date: 2023-06-14 20:24:35
 * LastEditors: pwl330109371 330109371@qq.com
 * LastEditTime: 2023-06-14 20:30:48
 */
import { request } from "@/utils/service"

/** 新增组织机构 */
export function addSysOrg(data: any) {
  return request<any>({
    url: "/api/system/v1/sysOrg",
    method: "post",
    data
  })
}
/** 编辑组织机构 */
export function editSysOrg(data: any) {
  return request<any>({
    url: "/api/system/v1/sysOrg",
    method: "put",
    data
  })
}

/** 获取组织机构 */
export function getSysOrgList(data: any) {
  return request<any>({
    url: "/api/system/v1/getOrg/tree",
    method: "get",
    data
  })
}

/** 删除组织机构 */
export function deleteSysOrg(id: string) {
  return request<any>({
    url: `/api/system/v1/sysOrg/${id}`,
    method: "delete"
  })
}
