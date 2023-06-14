import { PageBase } from "@/components/tsx/PageBase"
import ElForm from "element-plus/es/components/form"
import Upload from "@/components/tsx/Upload"
import router from "@/router"
import { useRoute } from "vue-router"
import MaintenanceApi, { IMaintenanceAdd } from "@/api/tsx/sales-order-management/maintenanceApi"
import MaterialArchivingApi from "@/api/tsx/sales-order-management/materialArchivingApi"
import { MyLoading } from "@/utils/Loading"

type TPageType = "order" | "material" | "contract"

export default new (class EditMaintenance extends PageBase {
  private api = new MaintenanceApi()
  private materialApi = new MaterialArchivingApi()
  private formRef: InstanceType<typeof ElForm> = null as any
  private pageType: TPageType = "order"
  private actType: TPageActType = "add"
  private id = ""
  private ruleForm: IMaintenanceAdd = {} as any

  public created() {
    const route = useRoute()
    this.pageType = (route.params.pageType as TPageType) || "order"
    this.actType = (route.params.type as TPageActType) || "add"
    this.id = (route.params.id as string) || ""
  }

  private get formRules() {
    if (this.editable) {
      return {
        contractName: { required: true, message: "请选择", trigger: "blur" },
        contractType: { required: true, message: "请选择", trigger: "blur" },
        saleOrderName: { required: true, message: "请选择", trigger: "blur" },
        contractAmount: { required: true, message: "请选择", trigger: "blur" },
        orderDownPayment: { required: true, message: "请选择", trigger: "blur" },
        partyAName: { required: true, message: "请选择", trigger: "blur" },
        partyBName: { required: true, message: "请选择", trigger: "blur" },
        signDate: { required: true, message: "请选择", trigger: "blur" },
        startDate: { required: true, message: "请选择", trigger: "blur" },
        endDate: { required: true, message: "请选择", trigger: "blur" }
      }
    } else if (this.pageType == "material") {
      return {
        collectionAmount: { required: true, message: "请选择", trigger: "blur" },
        deliverDate: { required: true, message: "请选择", trigger: "blur" }
      }
    }
    return undefined
  }

  private get isOrder() {
    return this.pageType == "order"
  }

  private get isLook() {
    return this.actType == "look"
  }

  private get editable() {
    if (this.pageType != "contract") return !this.isLook
    return false
  }

  private get title() {
    return this.isOrder ? "合同信息" : "销售订单信息"
  }

  public render(): JSX.Element {
    return (
      <div class="app-container editWrap">
        <div class="zh-form-page">
          <div class="zh-page-head">
            <div class="zh-page-head_left">
              <span>{this.title}</span>
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
          <h2>{this.title}</h2>
          <el-form
            ref="formRef"
            model={this.ruleForm}
            rules={this.formRules}
            size="default"
            label-width="140px"
            class="zh-page_formwrap_base zh-page_formwrap_5"
          >
            <el-form-item label="合同名称" prop="contractName" class="zh-page-form_formitem_5">
              {this.editable ? (
                <el-input v-model={this.ruleForm.contractName} placeholder="请输入"></el-input>
              ) : (
                this.ruleForm.contractName
              )}
            </el-form-item>

            <el-form-item label="合同类型" prop="contractType" class="zh-page-form_formitem_5">
              {this.editable ? (
                <el-select v-model={this.ruleForm.contractType} placeholder="请选择">
                  <el-option label="订单合同" value={1} />
                  <el-option label="外协合同" value={2} />
                </el-select>
              ) : (
                this.ruleForm.contractType
              )}
            </el-form-item>

            <el-form-item label="销售订单名称" prop="saleOrderName" class="zh-page-form_formitem_5">
              {this.editable ? (
                <el-input v-model={this.ruleForm.saleOrderName} placeholder="请输入"></el-input>
              ) : (
                this.ruleForm.saleOrderName
              )}
            </el-form-item>

            <el-form-item label="销售订单编号" prop="saleOrderNumber" class="zh-page-form_formitem_5">
              {this.ruleForm.saleOrderNumber}
            </el-form-item>

            <el-form-item label="合同金额（元）" prop="contractAmount" class="zh-page-form_formitem_5">
              {this.editable ? (
                <el-input type="number" v-model={this.ruleForm.contractAmount} placeholder="请输入"></el-input>
              ) : (
                this.ruleForm.contractAmount
              )}
            </el-form-item>

            <el-form-item label="合同首付款（元）" prop="orderDownPayment" class="zh-page-form_formitem_5">
              {this.editable ? (
                <el-input type="number" v-model={this.ruleForm.orderDownPayment} placeholder="请输入"></el-input>
              ) : (
                this.ruleForm.orderDownPayment
              )}
            </el-form-item>

            <el-form-item label="甲方" prop="partyAName" class="zh-page-form_formitem_5">
              {this.editable ? (
                <el-input v-model={this.ruleForm.partyAName} placeholder="请输入"></el-input>
              ) : (
                this.ruleForm.partyAName
              )}
            </el-form-item>

            <el-form-item label="乙方" prop="partyBName" class="zh-page-form_formitem_5">
              {this.editable ? (
                <el-input v-model={this.ruleForm.partyBName} placeholder="请输入"></el-input>
              ) : (
                this.ruleForm.partyBName
              )}
            </el-form-item>

            {this.orderNode()}
            {this.otherNode()}
            {this.pdfNode()}
          </el-form>
        </div>
      </div>
    )
  }

  private orderNode() {
    if (this.isOrder) {
      return [
        <el-form-item label="合同签订日期" prop="contractEndTime" class="zh-page-form_formitem_5">
          {this.editable ? (
            <el-date-picker
              v-model={this.ruleForm.contractEndTime}
              type="date"
              placeholder="Pick a date"
              style="width: 100%"
            />
          ) : (
            this.ruleForm.contractEndTime
          )}
        </el-form-item>,
        <el-form-item label="合同生效日期" prop="contractEffectiveTime" class="zh-page-form_formitem_5">
          {this.editable ? (
            <el-date-picker
              v-model={this.ruleForm.contractEffectiveTime}
              type="date"
              placeholder="Pick a date"
              style="width: 100%"
            />
          ) : (
            this.ruleForm.contractEffectiveTime
          )}
        </el-form-item>,
        <el-form-item label="合同结束日期" prop="contractCloseTime" class="zh-page-form_formitem_5">
          {this.editable ? (
            <el-date-picker
              v-model={this.ruleForm.contractCloseTime}
              type="date"
              placeholder="Pick a date"
              style="width: 100%"
            />
          ) : (
            this.ruleForm.contractCloseTime
          )}
        </el-form-item>
      ]
    }
  }

  private pdfNode() {
    if (this.pageType != "contract") {
      return (
        <div class="pdfList">
          {this.ruleForm.pdfList?.map((item) => (
            <div class="pdfItem">
              <Upload v-model={item.imagePath} disabled={this.actType == "look"} />
              <div class="pdfName">{item.name}</div>
            </div>
          ))}
          <div class="pdfItem">
            <Upload disabled={this.actType == "look"} />
            <div class="pdfName">{this.pageType == "order" ? "上传合同文件" : "上传验收材料"}</div>
          </div>
        </div>
      )
    }
  }

  private otherNode() {
    if (this.isOrder) {
      return (
        <div style={{ width: "100%" }}>
          <h2>其他信息</h2>
          {this.editable ? (
            <el-input
              type="textarea"
              resize="none"
              v-model={this.ruleForm.otherInformation}
              placeholder="请输入"
            ></el-input>
          ) : (
            this.ruleForm.otherInformation
          )}
        </div>
      )
    } else if (this.pageType == "contract") {
      return <div>合同列表</div>
    } else if (this.pageType == "material") {
      return [
        <el-form-item label="回款金额（元）" prop="amountCollected" class="zh-page-form_formitem_5">
          {this.editable ? (
            <el-input type="number" v-model={this.ruleForm.amountCollected} placeholder="请输入"></el-input>
          ) : (
            this.ruleForm.amountCollected
          )}
        </el-form-item>,
        <el-form-item label="交付日期" prop="deliveryTime" class="zh-page-form_formitem_5">
          {this.editable ? (
            <el-date-picker
              v-model={this.ruleForm.deliveryTime}
              type="date"
              placeholder="Pick a date"
              style="width: 100%"
            />
          ) : (
            this.ruleForm.deliveryTime
          )}
        </el-form-item>
      ]
    }
  }

  private cancel() {
    router.push({ name: "Maintenance" })
  }

  private save() {
    this.formRef.validate(async (valid) => {
      if (!valid) return
      const loading = new MyLoading()
      try {
        if (this.isOrder) {
          await this.api[this.id ? "edit" : "add"]?.(this.ruleForm)
        } else if (this.pageType == "material") {
          await this.materialApi[this.id ? "edit" : "add"]?.(this.ruleForm as any)
        }
        this.$message.success("操作成功")
      } catch (error) {
        console.log(error)
        this.$alert(`${error}`, { type: "error" })
      } finally {
        loading.close()
      }
    })
  }
})()
