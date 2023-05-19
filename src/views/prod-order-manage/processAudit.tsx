/*
 * @Author: tzx_sujie 1354146900@qq.com
 * @Date: 2023-05-17 15:10:45
 * @LastEditors: tzx_sujie 1354146900@qq.com
 * @LastEditTime: 2023-05-19 16:07:31
 */

import TempApi, { ITempQuery, ITempRes } from "@/api/tsx/ListTestApi"
import ListView from "@/components/tsx/ListView"
import { IColItem } from "@/components/tsx/MyTable"
import { PageBase } from "@/components/tsx/PageBase"

/** 工艺审核 */
export default new (class ProcessAudit extends PageBase {
  private api = new TempApi()
  private query: ITempQuery = {}
  private selected: AnyArray = []

  public render(): JSX.Element {
    return (
      <ListView
        api={this.api}
        query={this.query}
        notAdd
        tableConfig={{ setColumns: this.setColumns, notEdit: true, notDel: true, actionConfig: { width: "240" } }}
        onSelectionChange={this.onSelectionChange}
        vSlots={{ searchItems: this.searchItems, tableAction: this.tableAction, tableHeadAct: this.tableHeadAct }}
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

  private tableHeadAct() {
    return [
      <el-button type="primary" onClick={() => this.audit()}>
        审核
      </el-button>,
      <el-button type="primary" onClick={() => this.send()}>
        发送
      </el-button>,
      <el-button type="primary" onClick={() => this.exportExcel()}>
        导出清单
      </el-button>
    ]
  }

  private tableAction(scope: ElRow<ITempRes>) {
    return [
      <el-button type="primary" link onClick={() => this.details(scope.row.id)}>
        详情
      </el-button>,
      <el-button type="primary" link onClick={() => this.agree(scope.row.id)}>
        审核通过
      </el-button>,
      <el-button type="primary" link onClick={() => this.disagree(scope.row.id)}>
        退回修改
      </el-button>
    ]
  }

  private onSelectionChange(v: AnyArray) {
    this.selected = v
  }

  private audit() {
    if (this.selected.length == 0) return this.$message.error("当前还未选择提交数据")
  }

  private send() {
    if (this.selected.length == 0) return this.$message.error("当前还未选择提交数据")
  }

  private exportExcel() {}

  private details(id: number) {
    console.log(id)
  }

  private agree(id: number) {
    console.log(id)
  }

  private disagree(id: number) {
    console.log(id)
  }
})()
