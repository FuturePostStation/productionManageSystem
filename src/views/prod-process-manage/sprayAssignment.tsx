/*
 * @Author: tzx_sujie 1354146900@qq.com
 * @Date: 2023-05-17 15:37:43
 * @LastEditors: tzx_sujie 1354146900@qq.com
 * @LastEditTime: 2023-05-17 16:56:02
 */

import TempApi, { ITempQuery, ITempRes } from "@/api/tsx/ListTestApi"
import ListView from "@/components/tsx/ListView"
import { IColItem } from "@/components/tsx/MyTable"
import { PageBase } from "@/components/tsx/PageBase"
import TestDialog from "@/components/tsx/dialog/TestDialog"

/** 喷涂车间任务指派 */
export default new (class SprayAssignment extends PageBase {
  private api = new TempApi()
  private query: ITempQuery = {}

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
      fieldName: { label: "字段名称" },
      fieldCode: { label: "字段标识" },
      field1: { label: "字段标识" },
      field2: { label: "字段标识" }
    })
  }

  private tableAction(scope: ElRow<ITempRes>) {
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
