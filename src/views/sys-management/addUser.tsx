/**
 * Author: 从前慢 330109371@qq.com
 * Date: 2023-05-22 15:54:03
 * LastEditors: 从前慢 330109371@qq.com
 * LastEditTime: 2023-05-22 17:58:02
 */
import { PropType, defineComponent } from "vue"

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
const MyComponent = defineComponent({
  props: {
    user: {
      type: Object as PropType<User>,
      default: () => ({}),
      required: true
    },
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
    const handleSelect = (dilogDept: string, flag: boolean) => {
      // Your implementation here
      console.log(dilogDept, flag)
    }

    return {
      handleSelect
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
              <el-button onClick={() => {}}>返回</el-button>
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
            {/* <el-form-item label="性别" className="zh-page-form_formitem_5" prop="sex">
        <el-select value={this.user.sex} placeholder="性别">
          {this.userSexOptions.map((item) => (
            <el-option key={item.dictValue} label={item.dictLabel} value={item.dictValue} />
          ))}
        </el-select>
      </el-form-item> */}
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
