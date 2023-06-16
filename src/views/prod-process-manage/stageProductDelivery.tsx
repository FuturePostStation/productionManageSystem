/*
 * @Author: tzx_sujie 1354146900@qq.com
 * @Date: 2023-05-17 15:12:58
 * @LastEditors: tzx_sujie 1354146900@qq.com
 * @LastEditTime: 2023-05-19 15:28:25
 */

import StageProductDeliveryApi, {
  IStageProductDeliveryQuery,
  IStageProductDeliveryRes
} from "@/api/tsx/prod-process-manage/stageProductDeliveryApi"
import ListView from "@/components/tsx/ListView"
import { IColItem } from "@/components/tsx/MyTable"
import { PageBase } from "@/components/tsx/PageBase"
import router from "@/router"

/** 阶段产品交付 */
export default new (class StageProductDelivery extends PageBase {
  private api = new StageProductDeliveryApi()
  private query: IStageProductDeliveryQuery = {}

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

  private tableAction(scope: ElRow<IStageProductDeliveryRes>) {
    return [
      <el-button type="primary" link onClick={() => this.toDetails(scope.row.stageDeliveryId, "look")}>
        详情
      </el-button>,
      <el-button type="primary" link onClick={() => this.toDetails(scope.row.stageDeliveryId, "edit")}>
        阶段交付
      </el-button>
    ]
  }

  private toDetails(id: string, type: TPageActType) {
    router.push({ name: "EditProcess", params: { pageType: "delivery", type: type || "add", id: id } })
  }
})()
