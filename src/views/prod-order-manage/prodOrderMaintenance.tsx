/*
 * @Author: tzx_sujie 1354146900@qq.com
 * @Date: 2023-05-17 15:09:23
 * @LastEditors: tzx_sujie 1354146900@qq.com
 * @LastEditTime: 2023-05-17 16:42:14
 */

import ProdOrderMaintenanceApi, {
  IProdOrderMaintenanceQuery,
  IProdOrderMaintenanceRes
} from "@/api/tsx/prod-order-manage/prodOrderMaintenanceApi"
import ListView from "@/components/tsx/ListView"
import { IColItem } from "@/components/tsx/MyTable"
import { PageBase } from "@/components/tsx/PageBase"
import router from "@/router"

/** 生产订单维护 */
export default new (class ProdOrderMaintenance extends PageBase {
  private api = new ProdOrderMaintenanceApi()
  private query: IProdOrderMaintenanceQuery = {}

  public render(): JSX.Element {
    return (
      <ListView
        api={this.api}
        query={this.query}
        addHandler={this.addOrEdit}
        editHandler={this.addOrEdit}
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
      productName: { label: "生产订单名称" },
      status: { label: "生产订单状态" },
      produceOrderNumber: { label: "生产订单编号" },
      deliveryTime: { label: "交付日期", formatter: (r, c, v) => v && new Date(v).format("yyyy-MM-dd") },
      produceCreateTime: { label: "生产订单创建日期", formatter: (r, c, v) => v && new Date(v).format("yyyy-MM-dd") }
    } as Dict<IColItem>)
  }

  private tableAction(scope: ElRow<IProdOrderMaintenanceRes>) {
    return [
      <el-button type="primary" link onClick={() => this.details(scope.row.produceOrderId)}>
        详情
      </el-button>
    ]
  }

  private details(id: string) {
    router.push({ name: "ProdOrderEdit", params: { type: "look", id: id } })
  }

  private addOrEdit(item: IProdOrderMaintenanceRes) {
    const params: Dict = { type: item ? "edit" : "add" }
    if (item) params.id = item.produceOrderId
    router.push({ name: "ProdOrderEdit", params })
  }
})()
