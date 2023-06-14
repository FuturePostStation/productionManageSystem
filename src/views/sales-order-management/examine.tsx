/**
 * Author: 从前慢 330109371@qq.com
 * Date: 2023-05-17 14:33:29
 * LastEditors: 从前慢 330109371@qq.com
 * LastEditTime: 2023-05-17 14:33:38
 */
import ExamineApi, { IExamineQuery } from "@/api/tsx/sales-order-management/examineApi"
import ListView from "@/components/tsx/ListView"
import { IColItem } from "@/components/tsx/MyTable"
import { PageBase } from "@/components/tsx/PageBase"
import TestDialog from "@/components/tsx/dialog/TestDialog"

export default new (class Examine extends PageBase {
  private api = new ExamineApi()
  private query: IExamineQuery = {}

  public render(): JSX.Element {
    return (
      <ListView
        api={this.api}
        query={this.query}
        dialogConfig={{ editDialog: TestDialog }}
        tableConfig={{ setColumns: this.setColumns, actionConfig: { width: "120" } }}
        vSlots={{ searchItems: this.searchItems }}
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
      signTime: { label: "签订日期", formatter: (r, c, v) => new Date(v).format("yyyy-MM-dd") },
      contractAmount: { label: "合同金额（元）" }
    } as Dict<IColItem>)
  }
})()
