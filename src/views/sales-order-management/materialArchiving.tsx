/**
 * Author: 从前慢 330109371@qq.com
 * Date: 2023-05-17 14:37:24
 * LastEditors: 从前慢 330109371@qq.com
 * LastEditTime: 2023-05-17 14:38:43
 */
import MaterialArchivingApi, {
  IMaterialArchivingQuery,
  IMaterialArchivingRes
} from "@/api/tsx/sales-order-management/materialArchivingApi"
import ListView from "@/components/tsx/ListView"
import { IColItem } from "@/components/tsx/MyTable"
import { PageBase } from "@/components/tsx/PageBase"
import router from "@/router"

/** 交付材料归档 */
export default new (class MaterialArchiving extends PageBase {
  private api = new MaterialArchivingApi()
  private query: IMaterialArchivingQuery = {}
  private selected: Array<IMaterialArchivingRes> = []

  public render(): JSX.Element {
    return (
      <ListView
        api={this.api}
        query={this.query}
        tableConfig={{ setColumns: this.setColumns, notEdit: true, notDel: true, actionConfig: { width: "120" } }}
        addHandler={this.addOrEdit}
        onSelectionChange={(v: any) => (this.selected = v)}
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

  private tableHeadAct() {
    return [
      <el-button type="primary" onClick={() => this.archiving()}>
        归档
      </el-button>
    ]
  }

  private tableAction(scope: ElRow<IMaterialArchivingRes>) {
    return [
      <el-button type="primary" link onClick={() => this.details(scope.row.materialFileId, "look")}>
        详情
      </el-button>,
      <el-button type="primary" link onClick={() => this.details(scope.row.materialFileId, "edit")}>
        维护
      </el-button>
    ]
  }

  private setColumns(cols: Dict<IColItem>) {
    Object.assign(cols, {
      saleOrderName: { label: "订单名称" },
      saleOrderNumber: { label: "销售订单编号" },
      partyAName: { label: "甲方单位名称" },
      signingTime: { label: "签订日期", formatter: (r, c, v) => v && new Date(v).format("yyyy-MM-dd") },
      contractAmount: { label: "合同金额（元）" }
    } as Dict<IColItem>)
  }

  private addOrEdit() {
    // if (this.selected.length == 0) return this.$message.error("当前还未选择数据")
    router.push({ name: "EditMaintenance", params: { pageType: "material", type: "add" }, query: { ids: [] } })
  }

  private details(id: string, type: "look" | "edit") {
    router.push({ name: "EditMaintenance", params: { pageType: "material", type, id: id } })
  }

  private archiving() {
    if (this.selected.length == 0) return this.$message.error("当前还未选择数据")
  }
})()
