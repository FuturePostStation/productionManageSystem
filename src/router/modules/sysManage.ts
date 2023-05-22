/**
 * Author: 从前慢 330109371@qq.com
 * Date: 2023-05-22 15:25:34
 * LastEditors: 从前慢 330109371@qq.com
 * LastEditTime: 2023-05-22 15:53:11
 */
const Layout = () => import("@/layout/index.vue")
export default [
  {
    path: "/sys-management",
    component: Layout,
    redirect: "/sys-management/user-management",
    name: "SysManagement",
    meta: {
      title: "后台管理",
      elIcon: "Grid",
      sort: 6
    },
    children: [
      {
        path: "user-management",
        component: () => import("@/views/sys-management/userManagement"),
        name: "UserManagement",
        meta: {
          title: "用户管理",
          keepAlive: true
        }
      },
      {
        path: "add-user",
        component: () => import("@/views/sys-management/add-user"),
        name: "AddUser",
        meta: {
          title: "用户管理",
          hidden: true,
          keepAlive: true
        }
      },
      {
        path: "menu-management",
        component: () => import("@/views/sys-management/menuManagement"),
        name: "MenuManagement",
        meta: {
          title: "菜单管理",
          keepAlive: true
        }
      },
      {
        path: "role-management",
        component: () => import("@/views/sys-management/roleManagement"),
        name: "RoleManagement",
        meta: {
          title: "角色管理",
          keepAlive: true
        }
      }
    ]
  }
]
