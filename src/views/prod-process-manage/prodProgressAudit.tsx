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
      productName: { label: "生产订单名称" },
      status: { label: "生产任务状态" },
      produceOrderId: { label: "生产订单编号" },
      createTime: { label: "生产任务分配日期", formatter: (r, c, v) => v && new Date(v).format("yyyy-MM-dd") }
    } as Dict<IColItem>)
  }

  private tableAction(scope: ElRow<IProdProgressAuditRes>) {
    return [
      <el-button type="primary" link onClick={() => this.toDetails(scope.row.progressAuditId, "look")}>
        详情
      </el-button>,
      <el-button type="primary" link onClick={() => this.toDetails(scope.row.progressAuditId, "edit")}>
        进度审核
      </el-button>
    ]
  }

  private toDetails(id: string, type: TPageActType) {
    router.push({ name: "EditProcess", params: { pageType: "audit", type: type || "add", id: id } })
  }
})()
