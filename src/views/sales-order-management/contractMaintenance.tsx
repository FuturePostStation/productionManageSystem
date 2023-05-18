/**
 * Author: 从前慢 330109371@qq.com
 * Date: 2023-05-17 14:35:16
 * LastEditors: 从前慢 330109371@qq.com
 * LastEditTime: 2023-05-17 14:35:27
 */
import TempApi, { ITempQuery, ITempRes } from "@/api/tsx/ListTestApi"
import ListView from "@/components/tsx/ListView"
import { IColItem } from "@/components/tsx/MyTable"
import { PageBase } from "@/components/tsx/PageBase"

/** 外协合同维护 */
export default new (class ContractMaintenance extends PageBase {
  private api = new TempApi()
  private query: ITempQuery = {}
  private selected: Array<ITempRes> = []

  public render(): JSX.Element {
    return (
      <ListView
        api={this.api}
        query={this.query}
        tableConfig={{ setColumns: this.setColumns, notEdit: true, notDel: true, actionConfig: { width: "120" } }}
        addHandler={this.addOrEdit}
        onSelectionChange={this.onSelectionChange}
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
      <el-button type="primary" link onClick={() => this.details(scope.row.id, "look")}>
        详情
      </el-button>,
      <el-button type="primary" link onClick={() => this.details(scope.row.id, "edit")}>
        维护
      </el-button>
    ]
  }

  private onSelectionChange(v: Array<ITempRes>) {
    this.selected = v
  }

  private addOrEdit() {
    if (this.selected.length == 0) return this.$message.error("当前还未选择销售订单")
    this.$router.push({ name: "EditMaintenance", params: { pageType: "contract", type: "add" } })
  }

  private details(id: number, type: "look" | "edit") {
    this.$router.push({ name: "EditMaintenance", params: { pageType: "contract", type, id: id } })
  }
})()
