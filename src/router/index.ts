import { type RouteRecordRaw, createRouter, createWebHashHistory, createWebHistory } from "vue-router"

const Layout = () => import("@/layout/index.vue")

/** 常驻路由 */
export const constantRoutes: RouteRecordRaw[] = [
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
  },
  {
    path: "/table",
    component: Layout,
    redirect: "/table/element-plus",
    name: "Table",
    meta: {
      title: "表格",
      elIcon: "Grid"
    },
    children: [
      {
        path: "element-plus",
        component: () => import("@/views/table/element-plus/index.vue"),
        name: "ElementPlus",
        meta: {
          title: "Element Plus",
          keepAlive: true
        }
      },
      {
        path: "vxe-table",
        component: () => import("@/views/table/vxe-table/index.vue"),
        name: "VxeTable",
        meta: {
          title: "Vxe Table",
          keepAlive: true
        }
      },
      {
        path: "testTable",
        component: () => import("@/views/Test"),
        name: "testTable",
        meta: {
          title: "Test Table",
          keepAlive: true
        }
      },
      {
        path: "listView",
        component: () => import("@/views/ListTest"),
        name: "listView",
        meta: {
          title: "listView",
          keepAlive: true
        }
      }
    ]
  },
  {
    path: "/sales-order-management",
    component: Layout,
    redirect: "/sales-order-management/maintenance",
    name: "SalesOrderManagement",
    meta: {
      title: "销售订单管理",
      elIcon: "Grid"
    },
    children: [
      {
        path: "maintenance",
        component: () => import("@/views/sales-order-management/maintenance"),
        name: "Maintenance",
        meta: {
          title: "销售订单维护",
          keepAlive: true
        }
      },
      {
        path: "examine",
        component: () => import("@/views/sales-order-management/examine"),
        name: "Examine",
        meta: {
          title: "销售订单审核",
          keepAlive: true
        }
      },
      {
        path: "contract-maintenance",
        component: () => import("@/views/sales-order-management/contractMaintenance"),
        name: "ContractMaintenance",
        meta: {
          title: "外协合同维护",
          keepAlive: true
        }
      },
      {
        path: "material-archiving",
        component: () => import("@/views/sales-order-management/materialArchiving"),
        name: "MaterialArchiving",
        meta: {
          title: "交互材料归档",
          keepAlive: true
        }
      }
    ]
  }
]

/**
 * 动态路由
 * 用来放置有权限 (Roles 属性) 的路由
 * 必须带有 Name 属性
 */
export const asyncRoutes: RouteRecordRaw[] = [
  {
    path: "/permission",
    component: Layout,
    redirect: "/permission/page",
    name: "Permission",
    meta: {
      title: "权限管理",
      svgIcon: "lock",
      roles: ["admin", "editor"], // 可以在根路由中设置角色
      alwaysShow: true // 将始终显示根菜单
    },
    children: [
      {
        path: "page",
        component: () => import("@/views/permission/page.vue"),
        name: "PagePermission",
        meta: {
          title: "页面权限",
          roles: ["admin"] // 或者在子导航中设置角色
        }
      },
      {
        path: "directive",
        component: () => import("@/views/permission/directive.vue"),
        name: "DirectivePermission",
        meta: {
          title: "指令权限" // 如果未设置角色，则表示：该页面不需要权限，但会继承根路由的角色
        }
      }
    ]
  },
  {
    path: "/:pathMatch(.*)*", // Must put the 'ErrorPage' route at the end, 必须将 'ErrorPage' 路由放在最后
    redirect: "/404",
    name: "ErrorPage",
    meta: {
      hidden: true
    }
  }
]

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
