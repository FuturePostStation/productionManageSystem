/*
 * @Author: tzx_sujie 1354146900@qq.com
 * @Date: 2023-05-17 15:03:52
 * @LastEditors: tzx_sujie 1354146900@qq.com
 * @LastEditTime: 2023-05-18 14:47:19
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

/** 销售订单维护 */
export default new (class Maintenance extends PageBase {
  private api = new TempApi()
  private query: ITempQuery = {}
  private selected: Array<ITempRes> = []

  public render(): JSX.Element {
    return (
      <ListView
        api={this.api}
        query={this.query}
        tableConfig={{ setColumns: this.setColumns, actionConfig: { width: "120" } }}
        addHandler={this.addOrEdit}
        editHandler={this.addOrEdit}
        onSelectionChange={this.onSelectionChange}
        vSlots={{ searchItems: this.searchItems, tableHeadAct: this.tableHeadAct, tableAction: this.tableAction }}
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

  private tableAction(scope: ElRow<ITempRes>) {
    return [
      <el-button type="primary" link onClick={() => this.details(scope.row.id)}>
        详情
      </el-button>
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

  private submit() {
    if (this.selected.length == 0) return this.$message.error("当前还未选择提交数据")
  }

  private withdraw() {
    if (this.selected.length == 0) return this.$message.error("当前还未选择撤回数据")
  }

  private onSelectionChange(v: Array<ITempRes>) {
    this.selected = v
  }

  private addOrEdit(item: ITempRes) {
    const params: Dict = { pageType: "order", type: item ? "edit" : "add" }
    if (item) params.id = item.id
    this.$router.push({ name: "EditMaintenance", params })
  }

  private details(id: number) {
    this.$router.push({ name: "EditMaintenance", params: { pageType: "order", type: "look", id: id } })
  }
})()
