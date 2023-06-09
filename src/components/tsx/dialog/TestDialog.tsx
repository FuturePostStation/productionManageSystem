import { DialogBase } from "@/components/tsx/dialog/DialogBase"
import { ElForm } from "element-plus"
import { ref } from "vue"

export default class TestDialog extends DialogBase {
  constructor() {
    super()
  }

  protected init(param?: any): void {
    if (param) this.ruleForm = param
  }

  private formRef = ref<InstanceType<typeof ElForm>>()
  private formRules = ref({})

  protected content(): JSX.Element {
    return (
      <el-form ref={this.formRef} model={this.ruleForm} rules={this.formRules} size="default">
        <el-form-item label="名称" prop="name">
          <el-input v-model={this.ruleForm.name} placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="简介" prop="content">
          <el-input v-model={this.ruleForm.content} placeholder="请输入"></el-input>
        </el-form-item>
      </el-form>
    )
  }

  protected confirm() {
    this.formRef.value?.validate(async (valid) => {
      if (!valid) return
      // do someing
      this.close(true)
    })
  }
}
