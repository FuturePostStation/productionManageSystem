/**
 * Author: 从前慢 330109371@qq.com
 * Date: 2023-05-17 16:03:37
 * LastEditors: 从前慢 330109371@qq.com
 * LastEditTime: 2023-06-12 14:51:42
 */
const Layout = () => import("@/layout/index.vue")
export default [
  {
    path: "/sales-order-management",
    component: Layout,
    redirect: "/sales-order-management/maintenance",
    name: "SalesOrderManagement",
    meta: {
      title: "销售订单管理",
      elIcon: "DocumentCopy",
      sort: 1
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
        path: "editMaintenance/:pageType/:type/:id?",
        component: () => import("@/views/sales-order-management/editMaintenance"),
        name: "EditMaintenance",
        meta: {
          title: "销售订单编辑",
          keepAlive: true,
          hidden: true
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
