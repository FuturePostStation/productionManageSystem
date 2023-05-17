/**
 * Author: 从前慢 330109371@qq.com
 * Date: 2023-05-17 16:03:37
 * LastEditors: 从前慢 330109371@qq.com
 * LastEditTime: 2023-05-17 16:05:06
 */
const Layout = () => import("@/layout/index.vue")
export default [
  {
    path: "/prod-process-manage",
    component: Layout,
    redirect: "/prod-process-manage/prodTaskAllocation",
    name: "ProdProcessManage",
    meta: {
      title: "生产过程管理",
      elIcon: "Grid"
    },
    children: [
      {
        path: "prodTaskAllocation",
        component: () => import("@/views/prod-process-manage/prodTaskAllocation"),
        name: "ProdTaskAllocation",
        meta: {
          title: "生产任务分配",
          keepAlive: true
        }
      },
      {
        path: "materialCollection",
        component: () => import("@/views/prod-process-manage/materialCollection"),
        name: "MaterialCollection",
        meta: {
          title: "物料领取",
          keepAlive: true
        }
      },
      {
        path: "sheetMetalAssignment",
        component: () => import("@/views/prod-process-manage/sheetMetalAssignment"),
        name: "SheetMetalAssignment",
        meta: {
          title: "钣金车间任务指派",
          keepAlive: true
        }
      },
      {
        path: "prodProgressReporting",
        component: () => import("@/views/prod-process-manage/prodProgressReporting"),
        name: "ProdProgressReporting",
        meta: {
          title: "生产进度填报",
          keepAlive: true
        }
      },
      {
        path: "prodProgressAudit",
        component: () => import("@/views/prod-process-manage/prodProgressAudit"),
        name: "ProdProgressAudit",
        meta: {
          title: "生产进度审核",
          keepAlive: true
        }
      },
      {
        path: "stageProductDelivery",
        component: () => import("@/views/prod-process-manage/stageProductDelivery"),
        name: "StageProductDelivery",
        meta: {
          title: "阶段产品交付",
          keepAlive: true
        }
      },
      {
        path: "incomingProductInspection",
        component: () => import("@/views/prod-process-manage/incomingProductInspection"),
        name: "IncomingProductInspection",
        meta: {
          title: "入场产品检验",
          keepAlive: true
        }
      },
      {
        path: "sprayAssignment",
        component: () => import("@/views/prod-process-manage/sprayAssignment"),
        name: "SprayAssignment",
        meta: {
          title: "喷涂车间任务指派",
          keepAlive: true
        }
      }
    ]
  }
]
