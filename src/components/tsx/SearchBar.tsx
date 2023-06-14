/**
 * Author: pwl330109371 330109371@qq.com
 * Date: 2023-06-14 11:00:44
 * LastEditors: pwl330109371 330109371@qq.com
 * LastEditTime: 2023-06-14 11:58:24
 */
import { defineComponent, ref } from "vue"

export default defineComponent({
  props: {
    showHighSearchBtn: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { slots, emit }) {
    const isVisibale = ref(false)

    const handleClick = () => {
      isVisibale.value = !isVisibale.value
      emit("showMore", isVisibale.value)
    }

    return () => (
      <div class="zh-search">
        <div class="form_area">{slots.form && slots.form()}</div>
        <div class="btn_area">
          {props.showHighSearchBtn && (
            <el-button type="text" class="high-search" onClick={handleClick}>
              高级搜索
              <i class={["el-icon-arrow-", isVisibale.value ? "up" : "down"]} />
            </el-button>
          )}
          <div class="btn-right">{slots.btnright && slots.btnright()}</div>
        </div>
      </div>
    )
  }
})
