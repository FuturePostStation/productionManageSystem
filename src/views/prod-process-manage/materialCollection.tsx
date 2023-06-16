/*
 * @Author: tzx_sujie 1354146900@qq.com
 * @Date: 2023-05-17 15:12:57
 * @LastEditors: tzx_sujie 1354146900@qq.com
 * @LastEditTime: 2023-05-17 16:55:39
 */

import MaterialCollectionApi, {
  IMaterialCollectionQuery,
  IMaterialCollectionRes
} from "@/api/tsx/prod-process-manage/materialCollectionApi"
import ListView from "@/components/tsx/ListView"
import { IColItem } from "@/components/tsx/MyTable"
import { PageBase } from "@/components/tsx/PageBase"
import TestDialog from "@/components/tsx/dialog/TestDialog"

/** 物料领取 */
export default new (class MaterialCollection extends PageBase {
  private api = new MaterialCollectionApi()
  private query: IMaterialCollectionQuery = {}

  public render(): JSX.Element {
    return (
      <ListView
        api={this.api}
        query={this.query}
        dialogConfig={{ editDialog: TestDialog }}
        tableConfig={{ setColumns: this.setColumns, notEdit: true, notDel: true, actionConfig: { width: "120" } }}
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
      produceTaskStatus: { label: "生产任务状态" },
      produceOrderId: { label: "生产订单编号" },
      createTime: { label: "生产任务分配日期", formatter: (r, c, v) => v && new Date(v).format("yyyy-MM-dd") }
    } as Dict<IColItem>)
  }

  private tableAction(scope: ElRow<IMaterialCollectionRes>) {
    return [
      <el-button type="primary" link onClick={() => this.details(scope.row.produceOrderId)}>
        详情
      </el-button>,
      <el-button type="primary" link onClick={() => this.receive(scope.row.produceOrderId)}>
        物料领取
      </el-button>
    ]
  }

  private details(id: string) {
    console.log(id)
  }

  private receive(id: string) {
    console.log(id)
  }
})()
