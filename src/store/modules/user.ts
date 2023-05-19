import { ref } from "vue"
import store from "@/store"
import { defineStore } from "pinia"
import { usePermissionStore } from "./permission"
import { useTagsViewStore } from "./tags-view"
import { getToken, removeToken, setToken } from "@/utils/cache/cookies"
import router, { resetRouter } from "@/router"
import { loginApi, getUserInfoApi } from "@/api/login"
import { userLogin, getKeyCode } from "@/api/user"
import { type ILoginRequestData } from "@/api/login/types/login"
import { type RouteRecordRaw } from "vue-router"
import asyncRouteSettings from "@/config/async-route"

export const useUserStore = defineStore("user", () => {
  const token = ref<string>(getToken() || "")
  const roles = ref<string[]>([])
  const username = ref<string>("")
  const aesPublic = ref<string>("") // aes公钥
  const aesIV = ref<string>("") // aes偏移量
  const rsaPublic = ref<string>("") // rsa 公钥

  const permissionStore = usePermissionStore()
  const tagsViewStore = useTagsViewStore()

  /** 设置角色数组 */
  const setRoles = (value: string[]) => {
    roles.value = value
  }
  /** 登录 */
  const login = (loginData: ILoginRequestData) => {
    return new Promise((resolve, reject) => {
      loginApi({
        username: loginData.username,
        password: loginData.password,
        code: loginData.code
      })
        .then((res) => {
          setToken(res.data.token)
          token.value = res.data.token
          resolve(true)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  // 登录
  const Login = (userInfo: any) => {
    return new Promise((resolve, reject) => {
      userLogin(userInfo)
        .then((res: any) => {
          if (res.stat === 1) {
            setToken(res.data.xtoken)
            token.value = res.data.xtoken
            userInfo.value = res.data.user
            resolve(res)
          }
          resolve(res)
        })
        .catch((error: any) => {
          reject(error)
        })
    })
  }

  // 获取aes秘钥
  const getAesPublicRsaPublicAesIV = () => {
    return new Promise((resolve, reject) => {
      getKeyCode()
        .then((res) => {
          if (res.stat === 1) {
            aesPublic.value = res.data.AES_KEY
            aesIV.value = res.data.AES_IV
            rsaPublic.value = res.data.RSA_PUBLIC_KEY
            resolve(res) // resolve the promise with the response
          } else {
            reject("Invalid status") // reject the promise if status is invalid
          }
        })
        .catch((error) => reject(error)) // catch any errors and reject the promise
    })
  }
  /** 获取用户详情 */
  const getInfo = () => {
    return new Promise((resolve, reject) => {
      getUserInfoApi()
        .then((res) => {
          const data = res.data
          username.value = data.username
          // 验证返回的 roles 是否是一个非空数组
          if (data.roles && data.roles.length > 0) {
            roles.value = data.roles
          } else {
            // 塞入一个没有任何作用的默认角色，不然路由守卫逻辑会无限循环
            roles.value = asyncRouteSettings.defaultRoles
          }
          resolve(res)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
  /** 切换角色 */
  const changeRoles = async (role: string) => {
    const newToken = "token-" + role
    token.value = newToken
    setToken(newToken)
    await getInfo()
    permissionStore.setRoutes(roles.value)
    resetRouter()
    permissionStore.dynamicRoutes.forEach((item: RouteRecordRaw) => {
      router.addRoute(item)
    })
    _resetTagsView()
  }
  /** 登出 */
  const logout = () => {
    removeToken()
    token.value = ""
    roles.value = []
    resetRouter()
    _resetTagsView()
  }
  /** 重置 Token */
  const resetToken = () => {
    removeToken()
    token.value = ""
    roles.value = []
  }
  /** 重置 visited views 和 cached views */
  const _resetTagsView = () => {
    tagsViewStore.delAllVisitedViews()
    tagsViewStore.delAllCachedViews()
  }

  return {
    token,
    roles,
    username,
    setRoles,
    login,
    Login,
    getInfo,
    getAesPublicRsaPublicAesIV,
    changeRoles,
    logout,
    resetToken
  }
})

/** 在 setup 外使用 */
export function useUserStoreHook() {
  return useUserStore(store)
}
