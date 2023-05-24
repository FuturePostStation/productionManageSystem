import { PageBase } from "@/components/tsx/PageBase"
import ElForm from "element-plus/es/components/form"
import Upload from "@/components/tsx/Upload"
import router from "@/router"
import { useRoute } from "vue-router"

type TPageType = "order" | "material" | "contract"

export default new (class EditMaintenance extends PageBase {
  private formRef: InstanceType<typeof ElForm> = null as any
  private pageType: TPageType = "order"
  private actType: TPageActType = "add"
  private id = ""
  private ruleForm = {
    name: "name",
    type: "",
    saleName: "大师傅大师傅",
    saleNo: "dsfsdfsfsd",
    money: "12",
    downPay: "213",
    partyA: "23",
    partyB: "23",
    signDate: "2023-05-18",
    startDate: "2023-05-19",
    endDate: "2023-05-28",
    other: "山东鲁能弗兰克那个是快乐",
    pdfList: [] as AnyArray,
    /** 归档填写字段 */
    collectionAmount: "123",
    deliverDate: "2023-05-28"
  }

  public created() {
    const route = useRoute()
    this.pageType = (route.params.pageType as TPageType) || "order"
    this.actType = (route.params.type as TPageActType) || "add"
    this.id = (route.params.id as string) || ""
  }

  private get formRules() {
    if (this.editable) {
      return {
        name: { required: true, message: "请选择", trigger: "blur" },
        type: { required: true, message: "请选择", trigger: "blur" },
        saleName: { required: true, message: "请选择", trigger: "blur" },
        money: { required: true, message: "请选择", trigger: "blur" },
        downPay: { required: true, message: "请选择", trigger: "blur" },
        partyA: { required: true, message: "请选择", trigger: "blur" },
        partyB: { required: true, message: "请选择", trigger: "blur" },
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
            <el-form-item label="合同名称" prop="name" class="zh-page-form_formitem_5">
              {this.editable ? (
                <el-input v-model={this.ruleForm.name} placeholder="请输入"></el-input>
              ) : (
                this.ruleForm.name
              )}
            </el-form-item>

            <el-form-item label="合同类型" prop="type" class="zh-page-form_formitem_5">
              {this.editable ? (
                <el-input v-model={this.ruleForm.type} placeholder="请输入"></el-input>
              ) : (
                this.ruleForm.type
              )}
            </el-form-item>

            <el-form-item label="销售订单名称" prop="saleName" class="zh-page-form_formitem_5">
              {this.editable ? (
                <el-input v-model={this.ruleForm.saleName} placeholder="请输入"></el-input>
              ) : (
                this.ruleForm.saleName
              )}
            </el-form-item>

            <el-form-item label="销售订单编号" prop="saleNo" class="zh-page-form_formitem_5">
              {this.ruleForm.saleNo}
            </el-form-item>

            <el-form-item label="合同金额（元）" prop="money" class="zh-page-form_formitem_5">
              {this.editable ? (
                <el-input type="number" v-model={this.ruleForm.money} placeholder="请输入"></el-input>
              ) : (
                this.ruleForm.money
              )}
            </el-form-item>

            <el-form-item label="合同首付款（元）" prop="downPay" class="zh-page-form_formitem_5">
              {this.editable ? (
                <el-input type="number" v-model={this.ruleForm.downPay} placeholder="请输入"></el-input>
              ) : (
                this.ruleForm.downPay
              )}
            </el-form-item>

            <el-form-item label="甲方" prop="partyA" class="zh-page-form_formitem_5">
              {this.editable ? (
                <el-input v-model={this.ruleForm.partyA} placeholder="请输入"></el-input>
              ) : (
                this.ruleForm.partyA
              )}
            </el-form-item>

            <el-form-item label="乙方" prop="partyB" class="zh-page-form_formitem_5">
              {this.editable ? (
                <el-input v-model={this.ruleForm.partyB} placeholder="请输入"></el-input>
              ) : (
                this.ruleForm.partyB
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
        <el-form-item label="合同签订日期" prop="signDate" class="zh-page-form_formitem_5">
          {this.editable ? (
            <el-date-picker
              v-model={this.ruleForm.signDate}
              type="date"
              placeholder="Pick a date"
              style="width: 100%"
            />
          ) : (
            this.ruleForm.signDate
          )}
        </el-form-item>,
        <el-form-item label="合同生效日期" prop="signDate" class="zh-page-form_formitem_5">
          {this.editable ? (
            <el-date-picker
              v-model={this.ruleForm.signDate}
              type="date"
              placeholder="Pick a date"
              style="width: 100%"
            />
          ) : (
            this.ruleForm.signDate
          )}
        </el-form-item>,
        <el-form-item label="合同结束日期" prop="endDate" class="zh-page-form_formitem_5">
          {this.editable ? (
            <el-date-picker v-model={this.ruleForm.endDate} type="date" placeholder="Pick a date" style="width: 100%" />
          ) : (
            this.ruleForm.endDate
          )}
        </el-form-item>
      ]
    }
  }

  private pdfNode() {
    if (this.pageType != "contract") {
      return (
        <div class="pdfList">
          {this.ruleForm.pdfList.map((item) => (
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
            <el-input type="textarea" resize="none" v-model={this.ruleForm.other} placeholder="请输入"></el-input>
          ) : (
            this.ruleForm.other
          )}
        </div>
      )
    } else if (this.pageType == "contract") {
      return <div>合同列表</div>
    } else if (this.pageType == "material") {
      return [
        <el-form-item label="回款金额（元）" prop="collectionAmount" class="zh-page-form_formitem_5">
          {this.editable ? (
            <el-input type="number" v-model={this.ruleForm.collectionAmount} placeholder="请输入"></el-input>
          ) : (
            this.ruleForm.collectionAmount
          )}
        </el-form-item>,
        <el-form-item label="交付日期" prop="deliverDate" class="zh-page-form_formitem_5">
          {this.editable ? (
            <el-date-picker
              v-model={this.ruleForm.deliverDate}
              type="date"
              placeholder="Pick a date"
              style="width: 100%"
            />
          ) : (
            this.ruleForm.deliverDate
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
    })
  }
})()
