import { defineComponent, PropType } from "vue"

export enum LoadStatus {
  loading,
  success,
  failed,
  empty
}

export default defineComponent({
  props: {
    loadStatus: { type: Number as PropType<LoadStatus>, required: true },
    error: { type: String as PropType<string | null> },
    desc: String
  },
  render() {
    if (this.loadStatus == LoadStatus.success) {
      return this.$slots.default!(this)
    } else if (this.loadStatus == LoadStatus.failed || this.error) {
      return <el-empty class="pageError" description={this.error || "获取失败,请稍后重试"} />
    } else if (this.loadStatus == LoadStatus.empty) {
      return <el-empty description={this.desc || "暂无数据"} />
    } else {
      return <el-skeleton row={6} animated throttle={100} />
    }
  }
})
