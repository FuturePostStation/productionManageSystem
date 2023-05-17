/*
 * @Author: tzx_sujie 1354146900@qq.com
 * @Date: 2023-05-17 15:10:45
 * @LastEditors: tzx_sujie 1354146900@qq.com
 * @LastEditTime: 2023-05-17 16:44:07
 */

import TempApi, { ITempQuery, ITempRes } from "@/api/tsx/ListTestApi"
import ListView from "@/components/tsx/ListView"
import { IColItem } from "@/components/tsx/MyTable"
import { PageBase } from "@/components/tsx/PageBase"
import TestDialog from "@/components/tsx/dialog/TestDialog"

/** 工艺审核 */
export default new (class ProcessAudit extends PageBase {
  private api = new TempApi()
  private query: ITempQuery = {}

  public render(): JSX.Element {
    return (
      <ListView
        api={this.api}
        query={this.query}
        dialogConfig={{ editDialog: TestDialog }}
        tableConfig={{ setColumns: this.setColumns, notEdit: true, notDel: true, actionConfig: { width: "240" } }}
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
      <el-button type="primary" link onClick={() => this.details(scope.row.id)}>详情</el-button>,
      <el-button type="primary" link onClick={() => this.agree(scope.row.id)}>审核通过</el-button>,
      <el-button type="primary" link onClick={() => this.disagree(scope.row.id)}>退回修改</el-button>
    ]
  }

  private details(id: number) {

  }

  private agree(id: number) {

  }

  private disagree(id: number) {

  }
})()
