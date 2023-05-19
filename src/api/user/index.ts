/**
 * Author: 从前慢 330109371@qq.com
 * Date: 2023-05-19 09:58:34
 * LastEditors: 从前慢 330109371@qq.com
 * LastEditTime: 2023-05-19 10:02:41
 */
/*
 * @文件描述: 登录
 * @作者: PWL
 * @Date: 2019-01-16 16:57:57
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-12-28 18:06:24
 */
import { request } from "@/utils/service"
// 登录
export function userLogin(params) {
  return request({
    url: "/wb/sso/v1/login",
    // url: "pj/sso/login",
    method: "POST",
    data: params
  })
}
/**
 * 获取菜单
 */
export function getMenu() {
  return request({
    url: "/api/index",
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
}

// 退出登录
export function loginOut(params) {
  return request({
    url: "/wb/sso/v1/loginOut",
    // url: "pj/sso/loginOut",
    method: "GET",
    data: params
  })
}

// AES的Key和偏移量以及RSA的公钥
export function getKeyCode() {
  return request({
    url: "/wb/sso/v1/getKeyCode",
    // url: "pj/sso/getKeyCode",
    method: "GET"
  })
}

// 验证码
export function getCode(params) {
  return request({
    url: "/wb/sso/v1/code?uuid=" + params,
    // url: "pj/sso/code",
    method: "GET",
    responseType: "blob"
  })
}

// 根据主键获取用户数据
export function getUserById(params) {
  return request({
    url: "/wb/sso/v1/getUserById?userId=" + params,
    method: "GET"
  })
}

// 根据主键获取用户数据
export function validCode() {
  return request({
    url: "/wb/sso/v1/base/validCode",
    method: "GET"
  })
}

// 获取基础信息
export function getInfo() {
  return request({
    url: "/wb/sso/v1/base/info",
    method: "GET"
  })
}
