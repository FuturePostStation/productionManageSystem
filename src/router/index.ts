/**
 * Author: 从前慢 330109371@qq.com
 * Date: 2023-05-16 17:01:54
 * LastEditors: 从前慢 330109371@qq.com
 * LastEditTime: 2023-05-17 16:52:32
 */
import { type RouteRecordRaw, createRouter, createWebHashHistory, createWebHistory } from "vue-router"
import { commonRoutes, appRoutes } from "./router"

/** 常驻路由 */
export const constantRoutes: RouteRecordRaw[] = commonRoutes

/**
 * 动态路由
 * 用来放置有权限 (Roles 属性) 的路由
 * 必须带有 Name 属性
 */
export const asyncRoutes: RouteRecordRaw[] = appRoutes

const router = createRouter({
  history:
    import.meta.env.VITE_ROUTER_HISTORY === "hash"
      ? createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH)
      : createWebHistory(import.meta.env.VITE_PUBLIC_PATH),
  routes: constantRoutes
})

/** 重置路由 */
export function resetRouter() {
  // 注意：所有动态路由路由必须带有 Name 属性，否则可能会不能完全重置干净
  try {
    router.getRoutes().forEach((route) => {
      const { name, meta } = route
      if (name && meta.roles?.length) {
        router.hasRoute(name) && router.removeRoute(name)
      }
    })
  } catch (error) {
    // 强制刷新浏览器也行，只是交互体验不是很好
    window.location.reload()
  }
}

export default router
