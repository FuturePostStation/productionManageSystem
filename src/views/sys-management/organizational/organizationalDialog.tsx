/**
 * Author: pwl330109371 330109371@qq.com
 * Date: 2023-05-16 17:13:58
 * LastEditors: pwl330109371 330109371@qq.com
 * LastEditTime: 2023-06-24 20:28:42
 */
import { DialogBase } from "@/components/tsx/dialog/DialogBase"
import { ElForm } from "element-plus"
import { ref } from "vue"
import OriginApi, { OriginAdd, OriginRes, OriginQuery } from "./commApi"

export default class TestDialog extends DialogBase {
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
          <el-form-item label="简介" prop="content" className="zh-dialog-form_formitem">
            <el-input v-model={this.ruleForm.orgDescribe} placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="路径" prop="orgPath" className="zh-dialog-form_formitem">
            <el-input v-model={this.ruleForm.orgPath} placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="拼音" className="zh-dialog-form_formitem">
            <el-input v-model={this.ruleForm.orgPinyin} placeholder="请输入拼音" />
          </el-form-item>
          <el-form-item label="是否为父节点" className="zh-dialog-form_formitem">
            <el-select v-model={this.ruleForm.isParent} placeholder="请选择">
              <el-option label="是" value={0} />
              <el-option label="否" value={1} />
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
      const api = new OriginApi()
      api.add(this.ruleForm)
      this.close(true)
    })
  }
}
