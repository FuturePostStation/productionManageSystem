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
 * LastEditTime: 2023-05-17 16:05:06
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
      elIcon: "Grid"
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
        path: "warehousingManage",
        component: () => import("@/views/warehouse-manage/warehousingManage"),
        name: "WarehousingManage",
        meta: {
          title: "入库管理",
          keepAlive: true
        }
      },
      {
        path: "outboundManage",
        component: () => import("@/views/warehouse-manage/outboundManage"),
        name: "OutboundManage",
        meta: {
          title: "出库管理",
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
        path: "productStorage",
        component: () => import("@/views/warehouse-manage/productStorage"),
        name: "ProductStorage",
        meta: {
          title: "产品入库",
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
        path: "partsWarehousing",
        component: () => import("@/views/warehouse-manage/partsWarehousing"),
        name: "PartsWarehousing",
        meta: {
          title: "部件入库",
          keepAlive: true
        }
      }
    ]
  }
]
