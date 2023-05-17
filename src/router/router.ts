/**
 * Author: 从前慢 330109371@qq.com
 * Date: 2023-05-17 16:01:35
 * LastEditors: 从前慢 330109371@qq.com
 * LastEditTime: 2023-05-17 16:52:40
 */
import { type RouteRecordRaw } from "vue-router"
const Layout = () => import("@/layout/index.vue")

/**
 * 读取./modules下的所有js文件并注册模块
 */
const requireModule: any = import.meta.globEager<{ default: unknown[] }>("./modules/**/**.ts")
const modules: RouteRecordRaw[] = []
for (const fileName in requireModule) {
  modules.push(...requireModule[fileName].default)
}

// 常驻路由
export const commonRoutes: RouteRecordRaw[] = [
  {
    path: "/redirect",
    component: Layout,
    meta: {
      hidden: true
    },
    children: [
      {
        path: "/redirect/:path(.*)",
        component: () => import("@/views/redirect/index.vue")
      }
    ]
  },
  {
    path: "/403",
    component: () => import("@/views/error-page/403.vue"),
    meta: {
      hidden: true
    }
  },
  {
    path: "/404",
    component: () => import("@/views/error-page/404.vue"),
    meta: {
      hidden: true
    },
    alias: "/:pathMatch(.*)*"
  },
  {
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    meta: {
      hidden: true
    }
  },
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        component: () => import("@/views/dashboard/index.vue"),
        name: "Dashboard",
        meta: {
          title: "首页",
          svgIcon: "dashboard",
          affix: true
        }
      }
    ]
  }
]

/**
 * 业务路由，根据权限数据过滤后异步加载
 * @type {*[]}
 */
export const appRoutes = [...modules]
