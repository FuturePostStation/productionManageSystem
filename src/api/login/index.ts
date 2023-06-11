/**
 * Author: 从前慢 330109371@qq.com
 * Date: 2023-06-09 20:48:11
 * LastEditors: 从前慢 330109371@qq.com
 * LastEditTime: 2023-06-11 15:29:00
 */
/**
 * Author: 从前慢 330109371@qq.com
 * Date: 2023-05-16 15:28:36
 * LastEditors: 从前慢 330109371@qq.com
 * LastEditTime: 2023-06-09 17:40:52
 */
import { request } from "@/utils/service"
import type * as Login from "./types/login"

/** 获取登录验证码 */
export function getLoginCodeApi(uuid: string) {
  return request<Login.LoginCodeResponseData>({
    url: "/api/oauth/v1/login/code?uuid=" + uuid,
    method: "get"
  })
}

/** 登录并返回 Token */
export function loginApi(data: Login.ILoginRequestData) {
  return request<Login.LoginResponseData>({
    url: "/api/erp-auth-oauth/v1/login",
    method: "post",
    data
  })
}

/** 获取用户详情 */
export function getUserInfoApi() {
  return request<Login.UserInfoResponseData>({
    url: "/api/system/v1/sysUserInfo",
    method: "get"
  })
}
