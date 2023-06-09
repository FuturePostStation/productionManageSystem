/*
 * @Author: tzx_sujie 1354146900@qq.com
 * @Date: 2023-05-17 15:18:52
 * @LastEditors: tzx_sujie 1354146900@qq.com
 * @LastEditTime: 2023-05-17 16:57:21
 */

import TempApi, { ITempQuery, ITempRes } from "@/api/tsx/ListTestApi"
import ListView from "@/components/tsx/ListView"
import { IColItem } from "@/components/tsx/MyTable"
import { PageBase } from "@/components/tsx/PageBase"
import SelectDict from "@/components/tsx/SelectDict"
import TestDialog from "@/components/tsx/dialog/TestDialog"

/** 物料管理 */
export default new (class MaterialManage extends PageBase {
  private api = new TempApi()
  private query: ITempQuery = {}

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
      <el-form-item label="物料名称">
        <el-input v-model={this.query.name}></el-input>
      </el-form-item>,
      <el-form-item label="供应商">
        <SelectDict v-model={this.query.name} dictCode="123" />
      </el-form-item>,
      <el-form-item label="入库单号">
        <el-input v-model={this.query.name}></el-input>
      </el-form-item>,
      <el-form-item label="状态">
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
        查看
      </el-button>
    ]
  }

  private details(id: number) {
    console.log(id)
  }
})()
