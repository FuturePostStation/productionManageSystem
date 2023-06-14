/**
 * Author: pwl330109371 330109371@qq.com
 * Date: 2023-05-16 17:13:58
 * LastEditors: pwl330109371 330109371@qq.com
 * LastEditTime: 2023-06-14 21:19:44
 */
import { DialogBase } from "@/components/tsx/dialog/DialogBase"
import { ElForm } from "element-plus"
import { ref } from "vue"
import { addSysOrg } from "@/api/system/organizatuinalApi"
export default class TestDialog extends DialogBase {
  $message: any
  constructor() {
    super()
  }

  protected init(param?: any): void {
    if (param) Object.assign(this.ruleForm, param)
  }

  private formRef = ref<InstanceType<typeof ElForm>>()
  private formRules = ref({})

  protected content(): JSX.Element {
    return (
      <el-form
        ref={this.formRef}
        inline={true}
        model={this.ruleForm}
        labelWidth="60px"
        labelPosition="left"
        rules={this.formRules}
        size="default"
      >
        <div class="zh-dialog-form_formwrap">
          <el-form-item label="名称" prop="name" className="zh-dialog-form_formitem">
            <el-input v-model={this.ruleForm.orgName} placeholder="请输入名称"></el-input>
          </el-form-item>
          <el-form-item label="编码" className="zh-dialog-form_formitem">
            <el-input v-model={this.ruleForm.orgCode} placeholder="请输入拼音" />
          </el-form-item>
          <el-form-item label="拼音" className="zh-dialog-form_formitem">
            <el-input v-model={this.ruleForm.orgPinyin} placeholder="请输入拼音" />
          </el-form-item>
          <el-form-item label="描述" className="zh-dialog-form_formitem">
            <el-input v-model={this.ruleForm.orgDescribe} placeholder="请输入描述" />
          </el-form-item>
          <el-form-item label="是否为父节点" className="zh-dialog-form_formitem">
            <el-select v-model={this.ruleForm.isParent} placeholder="请选择">
              <el-option label="是" value={1} />
              <el-option label="否" value={0} />
            </el-select>
          </el-form-item>
        </div>
      </el-form>
    )
  }

  protected confirm() {
    this.formRef.value?.validate(async (valid) => {
      if (!valid) return
      // do someing
      const res = await addSysOrg(this.ruleForm)
      if (res.stat === 1) {
        this.close(true)
        this.$message.success("操作成功")
      }
    })
  }
}
