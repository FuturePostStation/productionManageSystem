/**
 * Author: 从前慢 330109371@qq.com
 * Date: 2023-05-17 10:37:47
 * LastEditors: 从前慢 330109371@qq.com
 * LastEditTime: 2023-05-18 12:20:01
 */
import MaintenanceApi, { IMaintenanceQuery, IMaintenanceRes } from "@/api/tsx/sales-order-management/maintenanceApi"
import ListView from "@/components/tsx/ListView"
import { IColItem } from "@/components/tsx/MyTable"
import { PageBase } from "@/components/tsx/PageBase"
import router from "@/router"

/** 销售订单维护 */
export default new (class Maintenance extends PageBase {
  private api = new MaintenanceApi()
  private query: IMaintenanceQuery = {}
  private selected: Array<IMaintenanceRes> = []

  public render(): JSX.Element {
    return (
      <ListView
        api={this.api}
        query={this.query}
        idKey="saleOrderId"
        tableConfig={{ setColumns: this.setColumns, actionConfig: { width: "140" } }}
        addHandler={this.addOrEdit}
        editHandler={this.addOrEdit}
        onSelectionChange={this.onSelectionChange}
        vSlots={{ searchItems: this.searchItems, tableHeadAct: this.tableHeadAct, tableAction: this.tableAction }}
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

  private tableAction(scope: ElRow<IMaintenanceRes>) {
    return [
      <el-button type="primary" link onClick={() => this.details(scope.row.saleOrderId)}>
        详情
      </el-button>
    ]
  }

  private setColumns(cols: Dict<IColItem>) {
    Object.assign(cols, {
      saleOrderName: { label: "销售订单名称" },
      saleOrderNumber: { label: "销售订单编号" },
      status: { label: "订单状态" },
      partyAName: { label: "甲方单位名称" },
      createTime: { label: "签订日期", formatter: (r, c, v) => v && new Date(v).format("yyyy-MM-dd") },
      contractAmount: { label: "合同金额（元）" }
    } as Dict<IColItem>)
  }

  private tableHeadAct() {
    return [
      <el-button type="primary" onClick={() => this.submit()}>
        提交
      </el-button>,
      <el-button type="primary" onClick={() => this.withdraw()}>
        撤回
      </el-button>
    ]
  }

  private submit() {
    if (this.selected.length == 0) return this.$message.error("当前还未选择提交数据")
  }

  private withdraw() {
    if (this.selected.length == 0) return this.$message.error("当前还未选择撤回数据")
  }

  private onSelectionChange(v: Array<IMaintenanceRes>) {
    this.selected = v
  }

  private addOrEdit(item: IMaintenanceRes) {
    const params: Dict = { pageType: "order", type: item ? "edit" : "add" }
    if (item) params.id = item.saleOrderId
    router.push({ name: "EditMaintenance", params })
  }

  private details(id: string) {
    router.push({ name: "EditMaintenance", params: { pageType: "order", type: "look", id: id } })
  }
})()
