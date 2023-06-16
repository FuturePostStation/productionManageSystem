/*
 * @Author: tzx_sujie 1354146900@qq.com
 * @Date: 2023-05-17 15:12:57
 * @LastEditors: tzx_sujie 1354146900@qq.com
 * @LastEditTime: 2023-05-17 16:55:56
 */

import SheetMetalAssignmentApi, {
  ISheetMetalAssignmentQuery,
  ISheetMetalAssignmentRes
} from "@/api/tsx/prod-process-manage/sheetMetalAssignmentApi"
import ListView from "@/components/tsx/ListView"
import { IColItem } from "@/components/tsx/MyTable"
import { PageBase } from "@/components/tsx/PageBase"
import TestDialog from "@/components/tsx/dialog/TestDialog"

/** 钣金车间任务指派 */
export default new (class SheetMetalAssignment extends PageBase {
  private api = new SheetMetalAssignmentApi()
  private query: ISheetMetalAssignmentQuery = {}

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
      workshopName: { label: "生产订单名称" },
      status: { label: "生产任务状态" },
      produceOrderId: { label: "生产订单编号" },
      createTime: { label: "生产任务分配日期", formatter: (r, c, v) => v && new Date(v).format("yyyy-MM-dd") }
    } as Dict<IColItem>)
  }

  private tableAction(scope: ElRow<ISheetMetalAssignmentRes>) {
    return [
      <el-button type="primary" link onClick={() => this.details(scope.row.produceOrderId)}>
        详情
      </el-button>,
      <el-button type="primary" link onClick={() => this.taskAllocation(scope.row.produceOrderId)}>
        任务分配
      </el-button>
    ]
  }

  private details(id: string) {
    console.log(id)
  }

  private taskAllocation(id: string) {
    console.log(id)
  }
})()
