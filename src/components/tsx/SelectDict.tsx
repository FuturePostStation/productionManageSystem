/*
 * @Author: tzx_sujie 1354146900@qq.com
 * @Date: 2023-05-17 16:32:25
 * @LastEditors: tzx_sujie 1354146900@qq.com
 * @LastEditTime: 2023-05-17 16:44:25
 * @FilePath: \productionManageSystem\src\components\tsx\SelectDict.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import SystemApi from "@/api/tsx/SystemApi"
import { PageBase } from "@/components/tsx/PageBase"
import { ComponentObjectPropsOptions } from "vue"

export default new (class SelectDict extends PageBase<IProps, IEvent> {
  constructor() {
    super()
  }

  protected props: ComponentObjectPropsOptions<IProps> = {
    dictCode: String,
    modelValue: [String, Number, Array],
    disabled: { type: Boolean, default: false },
    desc: String,
    initLoad: Boolean,
    isInterface: Boolean
  }
  public emits: (keyof IEvent)[] = ["change", "update:modelValue"]

  private api = new SystemApi()
  private isGet = false
  private loading = true
  private list: Array<{ value: string; text: string }> = []
  private label = ""
  private value = ""

  public created() {
    this.value = this.modelValue?.toString()
    if (this.modelValue) this.list.push({ value: this.desc || "", text: this.value })
  }

  public mounted() {
    if (this.initLoad) {
      this.getList()
    }
  }

  public render(): JSX.Element {
    let child = (
      <el-select
        v-model={this.value}
        placeholder="请选择"
        size="default"
        clearable
        loading={this.loading}
        onVisible-change={this.visibleChange}
        disabled={this.disabled}
        onChange={this.change}
      >
        {this.list.map((item) => (
          <el-option label={item.text} value={item.value} key={item.value} />
        ))}
      </el-select>
    )
    if (this.desc) {
      child = (
        <el-tooltip class="item" effect="dark" content={this.desc} placement="top-start">
          {child}
        </el-tooltip>
      )
    }
    return child
  }
  private visibleChange(v: boolean) {
    if (v) {
      this.getList()
    }
  }

  private async getList() {
    if (!this.isGet) {
      this.loading = true
      this.isGet = true
      try {
        if (this.isInterface) {
          const data = await this.api.dynamicDict(this.dictCode)
          this.list = data.map((item: any) => ({
            text: item.text,
            value: item.text.toString()
          }))
        } else {
          const data = await this.api.getDict(this.dictCode)
          this.list = data.map((item) => ({
            text: item.text,
            value: item.value
          }))
        }
        console.log(this.list)
      } catch (error) {
        this.isGet = false
        // this.$message({ message: `${error}`, type: 'error' });
      } finally {
        this.loading = false
      }
    }
  }

  private change(v: string) {
    console.log("change ", v)
    this.$emit("change", v)
    this.$emit("update:modelValue", v)
    // this.label = this.list.find((item) => item.id == v)?.name || '';
  }
})()
interface IProps {
  modelValue: any
  initLoad?: boolean
  dictCode: string
  isInterface?: boolean
  desc?: string
  disabled?: boolean
}
type IEvent = {
  change(val: string): void
  "update:modelValue": (v: any) => void
}
