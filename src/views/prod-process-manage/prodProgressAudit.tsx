/*
 * @Author: tzx_sujie 1354146900@qq.com
 * @Date: 2023-05-17 15:35:54
 * @LastEditors: tzx_sujie 1354146900@qq.com
 * @LastEditTime: 2023-05-19 14:50:08
 */

import ProdProgressAuditApi, {
  IProdProgressAuditQuery,
  IProdProgressAuditRes
} from "@/api/tsx/prod-process-manage/prodProgressAuditApi"
import ListView from "@/components/tsx/ListView"
import { IColItem } from "@/components/tsx/MyTable"
import { PageBase } from "@/components/tsx/PageBase"
import router from "@/router"

/** 生产进度审核 */
export default new (class ProdProgressAudit extends PageBase {
  private api = new ProdProgressAuditApi()
  private query: IProdProgressAuditQuery = {}

  public render(): JSX.Element {
    return (
      <ListView
        api={this.api}
        query={this.query}
        tableConfig={{ setColumns: this.setColumns, notEdit: true, notDel: true, actionConfig: { width: "120" } }}
        addHandler={this.toDetails}
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

  private tableAction(scope: ElRow<IProdProgressAuditRes>) {
    return [
      <el-button type="primary" link onClick={() => this.toDetails(scope.row.id, "look")}>
        详情
      </el-button>,
      <el-button type="primary" link onClick={() => this.toDetails(scope.row.id, "edit")}>
        进度审核
      </el-button>
    ]
  }

  private toDetails(id: number, type: TPageActType) {
    router.push({ name: "EditProcess", params: { pageType: "audit", type: type || "add", id: id } })
  }
})()
