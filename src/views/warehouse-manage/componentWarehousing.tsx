/*
 * @Author: tzx_sujie 1354146900@qq.com
 * @Date: 2023-05-17 15:18:54
 * @LastEditors: tzx_sujie 1354146900@qq.com
 * @LastEditTime: 2023-05-17 16:57:13
 */

import ComponentWarehousingApi, {
  IComponentWarehousingQuery,
  IComponentWarehousingRes
} from "@/api/tsx/warehouse-manage/componentWarehousingApi"
import ListView from "@/components/tsx/ListView"
import { IColItem } from "@/components/tsx/MyTable"
import { PageBase } from "@/components/tsx/PageBase"
import TestDialog from "@/components/tsx/dialog/TestDialog"

/** 部件入库管理 */
export default new (class ComponentWarehousing extends PageBase {
  private api = new ComponentWarehousingApi()
  private query: IComponentWarehousingQuery = {}

  public render(): JSX.Element {
    return (
      <ListView
        api={this.api}
        query={this.query}
        dialogConfig={{ editDialog: TestDialog }}
        tableConfig={{ setColumns: this.setColumns, actionConfig: { width: "160" } }}
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
      componentWarehousingNumber: { label: "入库单号" },
      estimatedCost: { label: "金额(元)" },
      warehousingTime: { label: "入库日期", formatter: (r, c, v) => v && new Date(v).format("yyyy-MM-dd") },
      componentName: { label: "入库部件" },
      depositor: { label: "入库人" },
      warehousionRemarks: { label: "备注" }
    } as Dict<IColItem>)
  }

  private tableAction(scope: ElRow<IComponentWarehousingRes>) {
    return [
      <el-button type="primary" link onClick={() => this.details(scope.row.id)}>
        查看
      </el-button>
    ]
  }

  private details(id: number) {
    console.log(id)
  }
})()
