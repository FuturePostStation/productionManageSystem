import ProdOrderMaintenanceApi, { IProdOrderMaintenanceAdd } from "@/api/tsx/prod-order-manage/prodOrderMaintenanceApi"
import MyTable, { IColItem } from "@/components/tsx/MyTable"
import { PageBase } from "@/components/tsx/PageBase"
import router from "@/router"
import { useRoute } from "vue-router"

interface IOrder {
  name: string
  partA: string
  amount: string
  signDate: string
}

interface IProd {
  name: string
  number: number
  isStandard: 1 | 2
  file: any
}

export default new (class ProdOrderEdit extends PageBase {
  private api = new ProdOrderMaintenanceApi()
  private actType: TPageActType = "add"
  private id = ""
  private ruleForm: IProdOrderMaintenanceAdd = {} as any
  private orderList: Array<IOrder> = []
  private prodList: Array<IProd> = []

  private get formRules() {
    return {
      contractName: { required: true, message: "请选择", trigger: "blur" }
    }
  }

  public created() {
    const route = useRoute()
    this.actType = (route.params.type as TPageActType) || "add"
    this.id = (route.params.id as string) || ""
    if (this.id) this.init()
  }

  private async init() {
    try {
      this.ruleForm = await this.api.details(this.id)
    } catch (error) {
      console.log(error)
    }
  }

  private get isLook() {
    return this.actType == "look"
  }

  public render(): JSX.Element {
    // const style={displ}
    return (
      <div class="app-container editWrap">
        <div class="zh-form-page">
          <div class="zh-page-head">
            <div class="zh-page-head_left">
              <span>订单信息</span>
            </div>
            <div class="zh-page-head_right">
              {this.actType != "look" && (
                <el-button type="primary" onClick={() => this.save()}>
                  保存
                </el-button>
              )}
              <el-button onClick={() => this.cancel()}>返回</el-button>
            </div>
          </div>
          <el-form
            ref="formRef"
            model={this.ruleForm}
            rules={this.formRules}
            size="default"
            label-width="100px"
            disabled={this.isLook}
          >
            {this.orderTable()}
            <div style={{ display: "flex", marginTop: "15px" }}>
              <el-form-item label="生产订单名称" style={{ marginRight: "30px" }}>
                <el-input v-model={this.ruleForm.productName} />
              </el-form-item>
              <el-form-item label="生产订单编号">{this.ruleForm.produceOrderNumber}</el-form-item>
            </div>
            {this.prodTable()}
            <div style={{ display: "flex", marginTop: "15px" }}>
              <el-form-item label="交付方式" style={{ marginRight: "30px" }}>
                <el-input v-model={this.ruleForm.deliveryMode} />
              </el-form-item>
              <el-form-item label="生产完成日期">
                <el-date-picker v-model={this.ruleForm.produceCompletionTime} type="date" />
              </el-form-item>
            </div>
            {this.otherNode()}
          </el-form>
        </div>
      </div>
    )
  }

  private get orderCols(): Record<keyof IOrder, IColItem> {
    return {
      name: { label: "销售订单名称" },
      partA: { label: "甲方单位名称" },
      amount: { label: "合同金额（元）" },
      signDate: { label: "合同签订日期" }
    }
  }

  private orderTable() {
    return <MyTable tableType="" tableData={this.orderList} columns={this.orderCols} />
  }

  private get prodCols(): Record<keyof IProd, IColItem> {
    return {
      name: { label: "产品名称" },
      number: { label: "产品数量" },
      isStandard: { label: "是否标准产品" },
      file: { label: "生产技术文件" }
    }
  }

  private prodTable() {
    return <MyTable tableType="" tableData={this.prodList} columns={this.prodCols} />
  }

  private otherNode() {
    return (
      <div style={{ width: "100%" }}>
        <h2>其他信息</h2>
        <el-input
          type="textarea"
          resize="none"
          v-model={this.ruleForm.otherInformation}
          placeholder="请输入"
        ></el-input>
      </div>
    )
  }

  private cancel() {
    router.push({ name: "ProdOrderMaintenance" })
  }

  private save() {
    console.log("save")
  }
})()
