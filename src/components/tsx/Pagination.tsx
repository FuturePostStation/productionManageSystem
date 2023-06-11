import { Pager } from "@/api/tsx/Pager"
import { defineComponent, PropType } from "vue"
import style from "./Pagination.module.scss"

const Pagination = defineComponent({
  props: {
    pager: { type: Object as PropType<Pager<any, any, any>>, required: true },
    layout: {
      type: Array as PropType<Array<"total" | "sizes" | "prev" | "pager" | "next" | "jumper">>,
      default: () => ["total", "sizes", "prev", "pager", "next"]
    }
  },
  render() {
    return (
      <el-pagination
        class={style.body}
        v-model:currentPage={this.pager.currentPage}
        v-model:page-size={this.pager.size}
        page-sizes={[10, 15, 20, 30, 50, 100]}
        background
        layout={this.layout.join(",")}
        total={this.pager.total}
        onSizeChange={(v: number) => this.onSizeChange(v)}
        onCurrentChange={(v: number) => this.onCurrentChange(v)}
      />
    )
  },
  methods: {
    onCurrentChange(index: number) {
      this.pager.goto(index)
    },
    onSizeChange(size: number) {
      this.pager.size = size
      this.pager.refresh()
    }
  }
})
export default Pagination
