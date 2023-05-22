/**
 * Author: 从前慢 330109371@qq.com
 * Date: 2023-05-17 14:33:29
 * LastEditors: 从前慢 330109371@qq.com
 * LastEditTime: 2023-05-22 15:52:21
 */
import TempApi, { ITempQuery } from "@/api/tsx/ListTestApi"
import ListView from "@/components/tsx/ListView"
import { IColItem } from "@/components/tsx/MyTable"
import { PageBase } from "@/components/tsx/PageBase"
import TestDialog from "@/components/tsx/dialog/TestDialog"
import router from "@/router"

export default new (class ListTest extends PageBase {
  private api = new TempApi()
  private query: ITempQuery = {}

  public render(): JSX.Element {
    return (
      <ListView
        api={this.api}
        query={this.query}
        addHandler={this.addHandler}
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

  private addHandler() {
    router.push({
      name: "AddUser"
    })
  }

  private setColumns(cols: Dict<IColItem>) {
    Object.assign(cols, {
      fieldName: { label: "用户姓名" },
      fieldCode: { label: "用户账号" },
      field1: { label: "性别" },
      field2: { label: "状态" }
    })
  }
})()
