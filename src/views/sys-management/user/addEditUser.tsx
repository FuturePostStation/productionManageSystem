/**
 * Author: 从前慢 330109371@qq.com
 * Date: 2023-05-22 15:54:03
 * LastEditors: 从前慢 330109371@qq.com
 * LastEditTime: 2023-05-23 10:35:30
 */
import router from "@/router"
import { PropType, Ref, defineComponent, ref } from "vue"

export interface User {
  id: number
  userName: string
  fullName: string
  guid: string
  deptName: string
  email: string
  sex: string
  status: number
  // 其他属性
}
interface UserSexOptions {
  value: string
  label: string
}

// 用户性别列表
const userSexOptions: UserSexOptions[] = [
  { value: "male", label: "男" },
  { value: "female", label: "女" }
]

const MyComponent = defineComponent({
  props: {
    rules: {
      type: Object as PropType<any>
    },
    title: {
      type: String,
      default: "新增用户"
    }
    // 其他属性
  },
  setup(props) {
    // 用户信息
    const user: Ref<User> = ref({
      id: 0,
      userName: "johndoe",
      fullName: "John Doe",
      guid: "abc123",
      deptName: "",
      email: "",
      sex: "",
      status: 0
    })

    const handleSelect = (dilogDept: string, flag: boolean) => {
      // Your implementation here
      console.log(dilogDept, flag)
    }

    // 返回
    const goBack = () => {
      router.go(-1)
    }

    return {
      handleSelect,
      goBack,
      userSexOptions,
      user
    }
  },
  render(): JSX.Element {
    return (
      <div class="app-container">
        <div class="zh-form-page">
          <div class="zh-page-head">
            <div class="zh-page-head_left">
              <span>{this.title}</span>
            </div>
            <div class="zh-page-head_right">
              <el-button type="primary" onClick={() => {}}>
                保存
              </el-button>
              <el-button onClick={() => this.goBack()}>返回</el-button>
            </div>
          </div>
          <el-form
            ref="form"
            model={this.user}
            rules={this.rules}
            label-position="left"
            className="zh-page_formwrap_base zh-page_formwrap_5"
          >
            <el-form-item label="用户编码" className="zh-page-form_formitem_5" prop="guid">
              <el-input value={this.user.guid} autocomplete="off" disabled="disabled" placeholder="自动生成" />
            </el-form-item>
            <el-form-item label="用户账号" className="zh-page-form_formitem_5" prop="userName">
              <el-input
                value={this.user.userName}
                disabled={this.title === "编辑用户"}
                autocomplete="off"
                placeholder="请输入"
              />
            </el-form-item>
            <el-form-item label="用户姓名" className="zh-page-form_formitem_5" prop="fullName">
              <el-input
                value={this.user.fullName}
                disabled={this.title === "编辑用户"}
                autocomplete="off"
                placeholder="请输入"
              />
            </el-form-item>

            <el-form-item label="部门" className="zh-page-form_formitem_5 org-item" prop="deptName">
              <el-input
                value={this.user.deptName}
                placeholder="组织"
                onFocus={() => this.handleSelect("dilogDept", false)}
              >
                <i slot="suffix" style={{ display: "flex", alignItems: "center" }}>
                  <svg-icon icon-class="formOrg" />
                </i>
              </el-input>
            </el-form-item>
            <el-form-item label="性别" className="zh-page-form_formitem_5" prop="sex">
              <el-select value={this.user.sex} placeholder="性别">
                {userSexOptions?.map((item) => (
                  <el-option key={item.value} label={item.label} value={item.value} />
                ))}
              </el-select>
            </el-form-item>
            <el-form-item label="电子邮箱" className="zh-page-form_formitem_5" prop="email">
              <el-input value={this.user.email} type="email" autocomplete="off" placeholder="请输入" />
            </el-form-item>
            {/* <el-form-item label="状态" className="zh-page-form_formitem_5" prop="status">
        <el-select value={this.user.status} autocomplete="off" placeholder="请选择">
          {this.statusOptions.map((dict) => (
            <el-option key={dict.dictValue} label={dict.dictLabel} value={dict.dictValue} />
          ))}
        </el-select>
      </el-form-item> */}
          </el-form>
        </div>
      </div>
    )
  }
})
export default MyComponent
