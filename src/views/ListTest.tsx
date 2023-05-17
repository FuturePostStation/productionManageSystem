import TempApi, { ITempQuery } from "@/api/tsx/ListTestApi"
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
      fieldName: { label: "字段名称" },
      fieldCode: { label: "字段标识" },
      field1: { label: "字段标识" },
      field2: { label: "字段标识" }
    })
  }
})()
