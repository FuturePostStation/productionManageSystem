/*
 * @Author: tzx_sujie 1354146900@qq.com
 * @Date: 2023-05-17 15:12:56
 * @LastEditors: tzx_sujie 1354146900@qq.com
 * @LastEditTime: 2023-05-17 16:55:49
 */

import ProdTaskAllocationApi, {
  IProdTaskAllocationQuery,
  IProdTaskAllocationRes
} from "@/api/tsx/prod-process-manage/prodTaskAllocationApi"
import ListView from "@/components/tsx/ListView"
import { IColItem } from "@/components/tsx/MyTable"
import { PageBase } from "@/components/tsx/PageBase"
import TestDialog from "@/components/tsx/dialog/TestDialog"

/** 生产任务分配 */
export default new (class ProdTaskAllocation extends PageBase {
  private api = new ProdTaskAllocationApi()
  private query: IProdTaskAllocationQuery = {}

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
      productName: { label: "生产订单名称" },
      produceTaskStatus: { label: "生产任务状态" },
      produceOrderId: { label: "生产订单编号" },
      createTime: { label: "生产任务分配日期", formatter: (r, c, v) => v && new Date(v).format("yyyy-MM-dd") }
    } as Dict<IColItem>)
  }

  private tableAction(scope: ElRow<IProdTaskAllocationRes>) {
    return [
      <el-button type="primary" link onClick={() => this.details(scope.row.id)}>
        详情
      </el-button>,
      <el-button type="primary" link onClick={() => this.taskAllocation(scope.row.id)}>
        任务分配
      </el-button>
    ]
  }

  private details(id: number) {
    console.log(id)
  }

  private taskAllocation(id: number) {
    console.log(id)
  }
})()
