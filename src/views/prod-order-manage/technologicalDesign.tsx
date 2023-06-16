/*
 * @Author: tzx_sujie 1354146900@qq.com
 * @Date: 2023-05-17 15:10:45
 * @LastEditors: tzx_sujie 1354146900@qq.com
 * @LastEditTime: 2023-05-19 16:34:57
 */

import TechnologicalDesignApi, {
  ITechnologicalDesignQuery,
  ITechnologicalDesignRes
} from "@/api/tsx/prod-order-manage/technologicalDesignApi"
import ListView from "@/components/tsx/ListView"
import { IColItem } from "@/components/tsx/MyTable"
import { PageBase } from "@/components/tsx/PageBase"
import router from "@/router"

/** 工艺设计 */
export default new (class TechnologicalDesign extends PageBase {
  private api = new TechnologicalDesignApi()
  private query: ITechnologicalDesignQuery = {}
  private selected: AnyArray = []

  public render(): JSX.Element {
    return (
      <ListView
        api={this.api}
        query={this.query}
        notAdd
        tableConfig={{ setColumns: this.setColumns, notEdit: true, notDel: true, actionConfig: { width: "200" } }}
        onSelectionChange={this.onSelectionChange}
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

  private setColumns(cols: Dict<IColItem>) {
    Object.assign(cols, {
      productName: { label: "生产订单名称" },
      status: { label: "设计审核状态" },
      number: { label: "生产订单编号" },
      designSubmissionTime: { label: "设计提交日期", formatter: (r, c, v) => v && new Date(v).format("yyyy-MM-dd") }
    } as Dict<IColItem>)
  }

  private tableHeadAct() {
    return [
      <el-button type="primary" onClick={() => this.toDetails()}>
        设计
      </el-button>,
      <el-button type="primary" onClick={() => this.send()}>
        发送
      </el-button>,
      <el-button type="primary" onClick={() => this.exportExcel()}>
        导出清单
      </el-button>
    ]
  }

  private tableAction(scope: ElRow<ITechnologicalDesignRes>) {
    return [
      <el-button type="primary" link onClick={() => this.toDetails(scope.row.produceOrderId, "look")}>
        详情
      </el-button>,
      <el-button type="primary" link onClick={() => this.toDetails(scope.row.produceOrderId, "edit")}>
        设计
      </el-button>
    ]
  }

  private onSelectionChange(v: AnyArray) {
    this.selected = v
  }

  private send() {
    if (this.selected.length == 0) return this.$message.error("当前还未选择提交数据")
  }

  private exportExcel() {
    console.log("export")
  }

  private toDetails(id?: string, type?: TPageActType) {
    router.push({ name: "EditDesign", params: { type: type || "add", id: id } })
  }
})()
