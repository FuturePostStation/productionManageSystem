import { ref, defineComponent } from "vue"
import { ElButton, ElForm, ElFormItem, ElInput, ElSelect, ElOption } from "element-plus"
import "./style.scss"
interface MenuForm {
  menuName: string
  menuType: string
  parentId: number
  parentName: string
  icon: string
  orderNum: number
  status: number
  level: number
  props: string
  url: string
  remark: string
}

interface MenuType {
  label: string
  value: string
}

export default defineComponent({
  name: "MenuForm",
  props: {
    id: {
      type: String,
      default: ""
    }
  },
  setup() {
    const menuForm = ref<MenuForm>({
      menuName: "",
      menuType: "",
      parentId: 0,
      parentName: "",
      icon: "",
      orderNum: 0,
      status: 0,
      level: 0,
      props: "",
      url: "",
      remark: ""
    })

    const rules = {}

    const getMenuTypes = () => {
      const types: MenuType[] = []

      // add logic to populate types array

      return types
    }

    const getMenuLevels = () => {
      const levels: MenuType[] = []

      // add logic to populate levels array

      return levels
    }

    const sure = () => {
      // add logic for save button
    }

    const cancel = () => {
      // add logic for cancel button
    }

    return {
      menuForm,
      rules,
      getMenuTypes,
      getMenuLevels,
      sure,
      cancel
    }
  },
  render() {
    return (
      <div class="edit-bg zh-form-page">
        <div class="zh-page-head">
          <div class="zh-page-head_left">
            <span>{this.$props.id && this.$props.id !== "0" ? "编辑菜单" : "创建菜单"}</span>
          </div>
          <div class="zh-page-head_right">
            <ElButton type="primary" onClick={this.sure}>
              保存
            </ElButton>
            <ElButton onClick={this.cancel}>返回</ElButton>
          </div>
        </div>

        <ElForm
          ref="menuForm"
          model={this.menuForm}
          label-width="80px"
          rules={this.rules}
          label-position="left"
          class="resource_form"
        >
          {/* <div class="node-tit">菜单信息</div> */}
          <div class="resource-form_formitem-wrap">
            <ElFormItem label="菜单名称" class="resource_formitem" prop="menuName">
              <ElInput v-model={this.menuForm.menuName} autocomplete="off" placeholder="请输入菜单名称" />
            </ElFormItem>
            <ElFormItem label="菜单类型" class="resource_formitem" prop="menuType">
              <ElSelect v-model={this.menuForm.menuType} placeholder="菜单类型">
                {this.getMenuTypes().map((item: MenuType) => (
                  <ElOption key={item.value} label={item.label} value={item.value} />
                ))}
              </ElSelect>
            </ElFormItem>
            <ElFormItem label="上级菜单" class="resource_formitem" prop="parentId">
              <ElSelect v-model={this.menuForm.parentId} placeholder="" disabled>
                <ElOption label={this.menuForm.parentName} value={this.menuForm.parentId} />
              </ElSelect>
            </ElFormItem>
            <ElFormItem label="图标" class="resource_formitem" prop="icon">
              <ElInput v-model={this.menuForm.icon} autocomplete="off" placeholder="请输入菜单图标" />
            </ElFormItem>

            <ElFormItem label="排序" class="resource_formitem" prop="orderNum">
              <ElInput v-model={this.menuForm.orderNum} autocomplete="off" placeholder="请输入菜单排序" />
            </ElFormItem>
            <ElFormItem label="状态" class="resource_formitem" prop="status">
              <ElSelect v-model={this.menuForm.status} placeholder="状态">
                <ElOption label="显示" value={0} />
                <ElOption label="不显示" value={1} />
              </ElSelect>
              {/* <ElSelect placeholder="状态" v-model={this.menuForm.status}>
                  {this.$getDictList('Sys.Menu.Status', { fullPath: false, type: 'Number' }).map((item: DictItem) => (
                    <ElOption key={item.value} label={item.label} value={item.value} />
                  ))}
                </ElSelect> */}
            </ElFormItem>
            <ElFormItem label="层级" class="resource_formitem" prop="level">
              <ElSelect v-model={this.menuForm.level} placeholder="请选择菜单层级" disabled>
                {this.getMenuLevels().map((item: MenuType) => (
                  <ElOption key={item.value} label={item.label} value={item.value} />
                ))}
              </ElSelect>
            </ElFormItem>
            <ElFormItem label="菜单参数" class="resource_formitem" prop="props">
              <ElInput v-model={this.menuForm.props} autocomplete="off" placeholder="请输入菜单参数" />
            </ElFormItem>
            <ElFormItem label="路径" class="resource_formitem textarea-formitem" prop="url">
              <ElInput v-model={this.menuForm.url} autocomplete="off" placeholder="请输入菜单路径" />
            </ElFormItem>
            <ElFormItem label="备注" class="resource_formitem textarea-formitem" prop="remark">
              <ElInput
                v-model={this.menuForm.remark}
                type="textarea"
                placeholder="请输入菜单备注"
                resize="none"
                autosize={{ minRows: 3, maxRows: 5 }}
              />
            </ElFormItem>
          </div>
        </ElForm>
      </div>
    )
  }
})
