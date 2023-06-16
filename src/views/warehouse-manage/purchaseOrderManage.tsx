/*
 * @Author: tzx_sujie 1354146900@qq.com
 * @Date: 2023-05-17 15:18:52
 * @LastEditors: tzx_sujie 1354146900@qq.com
 * @LastEditTime: 2023-05-17 16:57:40
 */

import PurchaseOrderApi, { IPurchaseOrderQuery, IPurchaseOrderRes } from "@/api/tsx/warehouse-manage/purchaseOrderApi"
import ListView from "@/components/tsx/ListView"
import { IColItem } from "@/components/tsx/MyTable"
import { PageBase } from "@/components/tsx/PageBase"
import TestDialog from "@/components/tsx/dialog/TestDialog"

/** 采购订单管理 */
export default new (class PurchaseOrderManage extends PageBase {
  private api = new PurchaseOrderApi()
  private query: IPurchaseOrderQuery = {}

  public render(): JSX.Element {
    return (
      <ListView
        api={this.api}
        query={this.query}
        dialogConfig={{ editDialog: TestDialog }}
        tableConfig={{ setColumns: this.setColumns, notEdit: true, notDel: true, actionConfig: { width: "120" } }}
        vSlots={{ searchItems: this.searchItems, tableAction: this.tableAction }}
      />
    )
  }

  private searchItems() {
    return [
      <el-form-item label="名称">
        <el-input v-model={this.query.name}></el-input>
      </el-form-item>
    ]
  }

  private setColumns(cols: Dict<IColItem>) {
    Object.assign(cols, {
      produceOrderName: { label: "生产订单名称" },
      produceOrderNumber: { label: "生产订单编号" },
      status: { label: "采购订单状态" },
      purchaseOrderNumber: { label: "采购订单编号" },
      purchaseDeliveryTime: { label: "采购提交日期", formatter: (r, c, v) => v && new Date(v).format("yyyy-MM-dd") },
      producer: { label: "制作人" }
    } as Dict<IColItem>)
  }

  private tableAction(scope: ElRow<IPurchaseOrderRes>) {
    return [
      <el-button type="primary" link onClick={() => this.details(scope.row.purchaseOrderId)}>
        详情
      </el-button>,
      <el-button type="primary" link onClick={() => this.make(scope.row.purchaseOrderId)}>
        制作
      </el-button>
    ]
  }

  private details(id: string) {
    console.log(id)
  }

  private make(id: string) {
    console.log(id)
  }
})()
