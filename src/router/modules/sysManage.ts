/**
 * Author: 从前慢 330109371@qq.com
 * Date: 2023-05-22 15:25:34
 * LastEditors: pwl330109371 330109371@qq.com
 * LastEditTime: 2023-06-14 19:34:04
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
      elIcon: "Setting",
      sort: 6
    },
    children: [
      {
        path: "organizational-management",
        component: () => import("@/views/sys-management/organizational"),
        name: "OrganizationalManagement",
        meta: {
          title: "机构管理",
          keepAlive: true
        }
      },
      {
        path: "code-management",
        component: () => import("@/views/sys-management/dictionary"),
        name: "DataDictionary",
        meta: {
          title: "数据字典",
          keepAlive: true
        }
      },
      {
        path: "user-management",
        component: () => import("@/views/sys-management/user"),
        name: "UserManagement",
        meta: {
          title: "用户管理",
          keepAlive: true
        }
      },
      {
        path: "add-user",
        component: () => import("@/views/sys-management/user/addEditUser"),
        name: "AddUser",
        meta: {
          title: "新增用户",
          hidden: true,
          keepAlive: true
        }
      },
      {
        path: "menu-management",
        component: () => import("@/views/sys-management/menu"),
        name: "MenuManagement",
        meta: {
          title: "菜单管理",
          keepAlive: true
        }
      },
      {
        path: "add-menu",
        component: () => import("@/views/sys-management/menu/addEditMenu"),
        name: "AddMenu",
        meta: {
          title: "新增菜单",
          hidden: true,
          keepAlive: true
        }
      },
      {
        path: "role-management",
        component: () => import("@/views/sys-management/role"),
        name: "RoleManagement",
        meta: {
          title: "角色管理",
          keepAlive: true
        }
      }
    ]
  }
]
