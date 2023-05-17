/**
 * Author: 从前慢 330109371@qq.com
 * Date: 2023-05-17 16:03:37
 * LastEditors: 从前慢 330109371@qq.com
 * LastEditTime: 2023-05-17 16:05:06
 */
const Layout = () => import("@/layout/index.vue")
export default [
  {
    path: "/prod-order-manage",
    component: Layout,
    redirect: "/prod-order-manage/prodOrderMaintenance",
    name: "ProdOrderManage",
    meta: {
      title: "生产订单管理",
      elIcon: "Grid"
    },
    children: [
      {
        path: "prodOrderMaintenance",
        component: () => import("@/views/prod-order-manage/prodOrderMaintenance"),
        name: "ProdOrderMaintenance",
        meta: {
          title: "生产订单维护",
          keepAlive: true
        }
      },
      {
        path: "technologicalDesign",
        component: () => import("@/views/prod-order-manage/technologicalDesign"),
        name: "TechnologicalDesign",
        meta: {
          title: "工艺设计",
          keepAlive: true
        }
      },
      {
        path: "porocessAudit",
        component: () => import("@/views/prod-order-manage/processAudit"),
        name: "ProcessAudit",
        meta: {
          title: "工艺审核",
          keepAlive: true
        }
      }
    ]
  }
]
