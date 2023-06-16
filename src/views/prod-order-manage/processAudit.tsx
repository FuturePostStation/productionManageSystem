/*
 * @Author: tzx_sujie 1354146900@qq.com
 * @Date: 2023-05-17 15:10:45
 * @LastEditors: tzx_sujie 1354146900@qq.com
 * @LastEditTime: 2023-05-19 16:07:31
 */

import PorocessAuditApi, { IPorocessAuditQuery, IPorocessAuditRes } from "@/api/tsx/prod-order-manage/porocessAuditApi"
import ListView from "@/components/tsx/ListView"
import { IColItem } from "@/components/tsx/MyTable"
import { PageBase } from "@/components/tsx/PageBase"

/** 工艺审核 */
export default new (class ProcessAudit extends PageBase {
  private api = new PorocessAuditApi()
  private query: IPorocessAuditQuery = {}
  private selected: AnyArray = []

  public render(): JSX.Element {
    return (
      <ListView
        api={this.api}
        query={this.query}
        notAdd
        tableConfig={{ setColumns: this.setColumns, notEdit: true, notDel: true, actionConfig: { width: "240" } }}
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
      designSubmissionTime: { label: "设计提交日期", formatter: (r, c, v) => v && new Date(v).format("yyyy-MM-dd") },
      createUser: { label: "制作人" }
    } as Dict<IColItem>)
  }

  private tableHeadAct() {
    return [
      <el-button type="primary" onClick={() => this.audit()}>
        审核
      </el-button>,
      <el-button type="primary" onClick={() => this.send()}>
        发送
      </el-button>,
      <el-button type="primary" onClick={() => this.exportExcel()}>
        导出清单
      </el-button>
    ]
  }

  private tableAction(scope: ElRow<IPorocessAuditRes>) {
    return [
      <el-button type="primary" link onClick={() => this.details(scope.row.produceOrderId)}>
        详情
      </el-button>,
      <el-button type="primary" link onClick={() => this.agree(scope.row.produceOrderId)}>
        审核通过
      </el-button>,
      <el-button type="primary" link onClick={() => this.disagree(scope.row.produceOrderId)}>
        退回修改
      </el-button>
    ]
  }

  private onSelectionChange(v: AnyArray) {
    this.selected = v
  }

  private audit() {
    if (this.selected.length == 0) return this.$message.error("当前还未选择提交数据")
  }

  private send() {
    if (this.selected.length == 0) return this.$message.error("当前还未选择提交数据")
  }

  private exportExcel() {
    console.log("exportExcel")
  }

  private details(id: string) {
    console.log(id)
  }

  private agree(id: string) {
    console.log(id)
  }

  private disagree(id: string) {
    console.log(id)
  }
})()
