/*
 * @Author: tzx_sujie 1354146900@qq.com
 * @Date: 2023-05-17 15:18:52
 * @LastEditors: tzx_sujie 1354146900@qq.com
 * @LastEditTime: 2023-05-17 16:57:21
 */

import MaterialOutboundApi, {
  IMaterialOutboundQuery,
  IMaterialOutboundRes
} from "@/api/tsx/warehouse-manage/materialOutboundApi"
import ListView from "@/components/tsx/ListView"
import { IColItem } from "@/components/tsx/MyTable"
import { PageBase } from "@/components/tsx/PageBase"
import SelectDict from "@/components/tsx/SelectDict"
import TestDialog from "@/components/tsx/dialog/TestDialog"

/** 物料出库管理 */
export default new (class MaterialOutbound extends PageBase {
  private api = new MaterialOutboundApi()
  private query: IMaterialOutboundQuery = {}

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
      <el-form-item label="物料名称">
        <el-input v-model={this.query.name}></el-input>
      </el-form-item>,
      <el-form-item label="供应商">
        <SelectDict v-model={this.query.name} dictCode="123" />
      </el-form-item>,
      <el-form-item label="入库单号">
        <el-input v-model={this.query.name}></el-input>
      </el-form-item>,
      <el-form-item label="状态">
        <el-input v-model={this.query.name}></el-input>
      </el-form-item>
    ]
  }

  private setColumns(cols: Dict<IColItem>) {
    Object.assign(cols, {
      warehousingOrderNumber: { label: "出库单号" },
      produceOrderName: { label: "生产订单名称" },
      produceOrderNumber: { label: "生产订单编号" },
      warechousingTime: { label: "出库日期", formatter: (r, c, v) => v && new Date(v).format("yyyy-MM-dd") },
      depositor: { label: "出库人" },
      reorderNote: { label: "备注" }
    } as Dict<IColItem>)
  }

  private tableAction(scope: ElRow<IMaterialOutboundRes>) {
    return [
      <el-button type="primary" link onClick={() => this.details(scope.row.materialWarehousingId)}>
        查看
      </el-button>
    ]
  }

  private details(id: number) {
    console.log(id)
  }
})()
