/*
 * @Author: tzx_sujie 1354146900@qq.com
 * @Date: 2023-05-17 15:03:52
 * @LastEditors: tzx_sujie 1354146900@qq.com
 * @LastEditTime: 2023-05-18 11:48:24
 */
/**
 * Author: 从前慢 330109371@qq.com
 * Date: 2023-05-17 10:37:47
 * LastEditors: 从前慢 330109371@qq.com
 * LastEditTime: 2023-05-18 11:33:06
 */
import TempApi, { ITempQuery, ITempRes } from "@/api/tsx/ListTestApi"
import ListView from "@/components/tsx/ListView"
import { IColItem } from "@/components/tsx/MyTable"
import { PageBase } from "@/components/tsx/PageBase"
import TestDialog from "@/components/tsx/dialog/TestDialog"
export default new (class ListTest extends PageBase {
  private api = new TempApi()
  private query: ITempQuery = {}

  public render(): JSX.Element {
    return (
      <ListView
        api={this.api}
        query={this.query}
        dialogConfig={{ editDialog: TestDialog }}
        tableConfig={{ setColumns: this.setColumns, actionConfig: { width: "120" } }}
        addHandler={this.addOrEdit}
        editHandler={this.addOrEdit}
        vSlots={{ searchItems: this.searchItems, tableHeadAct: this.tableHeadAct }}
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
      <el-button type="primary" onClick={() => this.submit()}>
        提交
      </el-button>,
      <el-button type="primary" onClick={() => this.withdraw()}>
        撤回
      </el-button>
    ]
  }

  private submit() {}

  private withdraw() {}

  private addOrEdit(item: ITempRes) {
    this.$router.push({
      name: "EditMaintenance",
      params: item ? { id: item.id } : undefined
    })
  }
})()
