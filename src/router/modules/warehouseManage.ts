/*
 * @Author: tzx_sujie 1354146900@qq.com
 * @Date: 2023-05-17 17:03:49
 * @LastEditors: tzx_sujie 1354146900@qq.com
 * @LastEditTime: 2023-05-17 17:07:56
 */
/**
 * Author: 从前慢 330109371@qq.com
 * Date: 2023-05-17 16:03:37
 * LastEditors: 从前慢 330109371@qq.com
 * LastEditTime: 2023-06-12 14:47:33
 */
const Layout = () => import("@/layout/index.vue")
export default [
  {
    path: "/warehouse-manage",
    component: Layout,
    redirect: "/warehouse-manage/purchaseOrderManage",
    name: "WarehouseManage",
    meta: {
      title: "仓库管理",
      elIcon: "House",
      sort: 4
    },
    children: [
      {
        path: "purchaseOrderManage",
        component: () => import("@/views/warehouse-manage/purchaseOrderManage"),
        name: "PurchaseOrderManage",
        meta: {
          title: "采购订单管理",
          keepAlive: true
        }
      },
      {
        path: "materialManage",
        component: () => import("@/views/warehouse-manage/materialManage"),
        name: "MaterialManage",
        meta: {
          title: "物料管理",
          keepAlive: true
        }
      },
      {
        path: "materialOutbound",
        component: () => import("@/views/warehouse-manage/materialOutbound"),
        name: "MaterialOutbound",
        meta: {
          title: "物料出库管理",
          keepAlive: true
        }
      },
      {
        path: "materialWarehousing",
        component: () => import("@/views/warehouse-manage/materialWarehousing"),
        name: "MaterialWarehousing",
        meta: {
          title: "物料入库管理",
          keepAlive: true
        }
      },
      {
        path: "prodManage",
        component: () => import("@/views/warehouse-manage/prodManage"),
        name: "ProdManage",
        meta: {
          title: "产品管理",
          keepAlive: true
        }
      },
      {
        path: "prodOutbound",
        component: () => import("@/views/warehouse-manage/prodOutbound"),
        name: "ProdOutbound",
        meta: {
          title: "产品出库管理",
          keepAlive: true
        }
      },
      {
        path: "prodWarehousing",
        component: () => import("@/views/warehouse-manage/prodWarehousing"),
        name: "ProdWarehousing",
        meta: {
          title: "产品入库管理",
          keepAlive: true
        }
      },
      {
        path: "componentManage",
        component: () => import("@/views/warehouse-manage/componentManage"),
        name: "ComponentManage",
        meta: {
          title: "部件管理",
          keepAlive: true
        }
      },
      {
        path: "componentOutbound",
        component: () => import("@/views/warehouse-manage/componentOutbound"),
        name: "ComponentOutbound",
        meta: {
          title: "部件出库管理",
          keepAlive: true
        }
      },
      {
        path: "componentWarehousing",
        component: () => import("@/views/warehouse-manage/componentWarehousing"),
        name: "ComponentWarehousing",
        meta: {
          title: "部件入库管理",
          keepAlive: true
        }
      }
    ]
  }
]
