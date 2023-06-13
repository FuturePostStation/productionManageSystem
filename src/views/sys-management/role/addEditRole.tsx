/**
 * Author: 从前慢 330109371@qq.com
 * Date: 2023-05-22 15:54:03
 * LastEditors: 从前慢 330109371@qq.com
 * LastEditTime: 2023-05-24 16:53:58
 */
import { DialogBase } from "@/components/tsx/dialog/DialogBase"
import { ElForm } from "element-plus"
import { ref } from "vue"

interface Role {
  id: number
  roleName: string
  roleCode: string
  type: string
  remark: string
  status: number
}
interface StateOptions {
  value: string
  label: string
}
export default class RoleDialog extends DialogBase {
  constructor() {
    super()
  }

  protected init(param?: any): void {
    if (param) this.ruleForm = param
  }
  // 用户信息
  private role = ref<Role>({
    id: 0,
    roleName: "John Doe",
    roleCode: "abc123",
    type: "",
    remark: "",
    status: 0
  })

  private dialogData = ref({
    title: "新增用户",
    visible: true
  })

  // 状态列表
  statusOptions: StateOptions[] = [
    { value: "1", label: "启用" },
    { value: "0", label: "禁用" }
  ]

  // 确定
  protected dialogSure = (ref: string) => {
    console.log("string", ref)
  }

  // 取消
  protected dialogClose = (ref: string) => {
    console.log("string", ref)
  }

  private formRef = ref<InstanceType<typeof ElForm>>()
  private formRules = ref({})

  protected content(): JSX.Element {
    return (
      <el-form ref="this.roleForm" model={this.ruleForm} rules={this.formRules} labelPosition="left">
        <div class="zh-dialog-form_formwrap">
          <el-form-item label="角色编码" className="zh-dialog-form_formitem" prop="this.roleCode">
            <el-input v-model={this.ruleForm.roleCode} autocomplete="off" placeholder="请输入" />
          </el-form-item>
          <el-form-item label="角色名称" className="zh-dialog-form_formitem" prop="this.roleName">
            <el-input v-model={this.ruleForm.roleName} autocomplete="off" placeholder="请输入" />
          </el-form-item>
          {/* <el-form-item label="角色类型" className="zh-dialog-form_formitem" prop="type">
              <el-select v-model={this.role.type} placeholder="角色类型">
                {$getDictList("AuthMng.this.roleMng.Stthis.roleType").map((item) => (
                  <el-option key={item.value} label={item.label} value={item.value} />
                ))}
              </el-select>
            </el-form-item> */}
          <el-form-item label="状态" className="zh-dialog-form_formitem" prop="status">
            <el-select v-model={this.ruleForm.status} autocomplete="off" placeholder="请选择">
              {this.statusOptions.map((dict: any) => (
                <el-option key={dict.dictValue} label={dict.dictLabel} value={dict.dictValue} />
              ))}
            </el-select>
          </el-form-item>
          <el-form-item label="备注" className="zh-dialog-form_formitem_textarea" prop="remark">
            <el-input v-model={this.ruleForm.remark} type="textarea" placeholder="请输入" rows={3} />
          </el-form-item>
        </div>
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
