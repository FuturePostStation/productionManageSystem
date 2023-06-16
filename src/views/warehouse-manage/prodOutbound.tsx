/*
 * @Author: tzx_sujie 1354146900@qq.com
 * @Date: 2023-05-17 15:18:53
 * @LastEditors: tzx_sujie 1354146900@qq.com
 * @LastEditTime: 2023-05-17 16:57:35
 */

import ProdOutboundApi, { IProdOutboundQuery, IProdOutboundRes } from "@/api/tsx/warehouse-manage/prodOutboundApi"
import ListView from "@/components/tsx/ListView"
import { IColItem } from "@/components/tsx/MyTable"
import { PageBase } from "@/components/tsx/PageBase"
import TestDialog from "@/components/tsx/dialog/TestDialog"

/** 产品出库管理 */
export default new (class ProdOutbound extends PageBase {
  private api = new ProdOutboundApi()
  private query: IProdOutboundQuery = {}

  public render(): JSX.Element {
    return (
      <ListView
        api={this.api}
        query={this.query}
        dialogConfig={{ editDialog: TestDialog }}
        tableConfig={{ setColumns: this.setColumns, actionConfig: { width: "160" } }}
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
      deliveryNumber: { label: "出库单号" },
      recipient: { label: "领用人" },
      productDeliveryTime: { label: "出库日期", formatter: (r, c, v) => v && new Date(v).format("yyyy-MM-dd") },
      outboundProduct: { label: "出库产品" },
      outboundPerson: { label: "出库人" },
      outboundRemarks: { label: "备注" }
    } as Dict<IColItem>)
  }

  private tableAction(scope: ElRow<IProdOutboundRes>) {
    return [
      <el-button type="primary" link onClick={() => this.details(scope.row.productDeliveryId)}>
        查看
      </el-button>
    ]
  }

  private details(id: number) {
    console.log(id)
  }
})()
