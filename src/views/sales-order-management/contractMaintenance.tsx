/*
 * @Author: tzx_sujie 1354146900@qq.com
 * @Date: 2023-05-18 15:21:46
 * @LastEditors: tzx_sujie 1354146900@qq.com
 * @LastEditTime: 2023-05-18 15:47:17
 */
/**
 * Author: 从前慢 330109371@qq.com
 * Date: 2023-05-17 14:35:16
 * LastEditors: 从前慢 330109371@qq.com
 * LastEditTime: 2023-05-23 11:21:31
 */
import ContractMaintenanceApi, {
  IContractMaintenanceQuery,
  IContractMaintenanceRes
} from "@/api/tsx/sales-order-management/contractMaintenanceApi"
import ListView from "@/components/tsx/ListView"
import { IColItem } from "@/components/tsx/MyTable"
import { PageBase } from "@/components/tsx/PageBase"
import router from "@/router"

/** 外协合同维护 */
export default new (class ContractMaintenance extends PageBase {
  private api = new ContractMaintenanceApi()
  private query: IContractMaintenanceQuery = {}
  private selected: Array<IContractMaintenanceRes> = []

  public render(): JSX.Element {
    return (
      <ListView
        api={this.api}
        query={this.query}
        tableConfig={{ setColumns: this.setColumns, notEdit: true, notDel: true, actionConfig: { width: "120" } }}
        addHandler={this.addOrEdit}
        onSelectionChange={(v: any) => (this.selected = v)}
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
      saleOrderName: { label: "订单名称" },
      saleOrderNumber: { label: "销售订单编号" },
      partyA: { label: "甲方单位名称" },
      signingTime: { label: "签订日期", formatter: (r, c, v) => v && new Date(v).format("yyyy-MM-dd") },
      contractAmount: { label: "合同金额（元）" }
    } as Dict<IColItem>)
  }

  private tableAction(scope: ElRow<IContractMaintenanceRes>) {
    return [
      <el-button type="primary" link onClick={() => this.details(scope.row.externalContractId, "look")}>
        详情
      </el-button>,
      <el-button type="primary" link onClick={() => this.details(scope.row.externalContractId, "edit")}>
        维护
      </el-button>
    ]
  }

  private addOrEdit() {
    if (this.selected.length == 0) return this.$message.error("当前还未选择销售订单")
    router.push({ name: "EditMaintenance", params: { pageType: "contract", type: "add" } })
  }

  private details(id: string, type: "look" | "edit") {
    router.push({ name: "EditMaintenance", params: { pageType: "contract", type, id: id } })
  }
})()
