/**
 * Author: 从前慢 330109371@qq.com
 * Date: 2023-05-17 14:33:29
 * LastEditors: 从前慢 330109371@qq.com
 * LastEditTime: 2023-05-17 14:33:38
 */
import OrderAuditApi, { IOrderAuditQuery, IOrderAuditRes } from "@/api/tsx/sales-order-management/orderAuditApi"
import ListView from "@/components/tsx/ListView"
import { IColItem } from "@/components/tsx/MyTable"
import { PageBase } from "@/components/tsx/PageBase"
import router from "@/router"

export default new (class OrderAudit extends PageBase {
  private api = new OrderAuditApi()
  private query: IOrderAuditQuery = {}
  private selected: Array<IOrderAuditRes> = []

  public render(): JSX.Element {
    return (
      <ListView
        api={this.api}
        query={this.query}
        tableConfig={{ setColumns: this.setColumns, notEdit: true, notDel: true, actionConfig: { width: "200" } }}
        notAdd
        onSelectionChange={(v: any) => (this.selected = v)}
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

  private setColumns(cols: Dict<IColItem>) {
    Object.assign(cols, {
      saleOrderName: { label: "销售订单名称" },
      saleOrderNumber: { label: "销售订单编号" },
      status: { label: "订单状态" },
      partyAName: { label: "甲方单位名称" },
      signTime: { label: "签订日期", formatter: (r, c, v) => v && new Date(v).format("yyyy-MM-dd") },
      contractAmount: { label: "合同金额（元）" }
    } as Dict<IColItem>)
  }

  private tableAction(scope: ElRow<IOrderAuditRes>) {
    return [
      <el-button type="primary" link onClick={() => this.details(scope.row.saleOrderId)}>
        详情
      </el-button>,
      <el-button type="primary" link onClick={() => this.audit(scope.row)}>
        审核通过
      </el-button>,
      <el-button type="primary" link onClick={() => this.disagree(scope.row)}>
        退回修改
      </el-button>
    ]
  }

  private tableHeadAct() {
    return [
      <el-button type="primary" size="default" onClick={() => this.audit()}>
        审核通过
      </el-button>,
      <el-button type="primary" size="default" onClick={() => this.disagree()}>
        退回修改
      </el-button>
    ]
  }

  private audit(item?: IOrderAuditRes) {
    if (!item && this.selected.length == 0) return this.$message.error("当前还未选择数据")
    console.log(item)
  }
  private disagree(item?: IOrderAuditRes) {
    if (!item && this.selected.length == 0) return this.$message.error("当前还未选择数据")
    console.log(item)
  }

  private details(id: string) {
    router.push({ name: "EditMaintenance", params: { pageType: "order", type: "look", id: id } })
  }
})()
