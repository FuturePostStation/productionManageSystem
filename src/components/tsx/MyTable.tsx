import { Pager } from "@/api/tsx/Pager"
import { Lock, Unlock } from "@element-plus/icons-vue"
import { PropType, defineComponent } from "vue"
import Pagination from "./Pagination"
import style from "./Pagination.module.scss"

export interface IColItem {
  label?: string
  width?: string
  formatter?: (row: any, col: Dict<any>, val: any, index: number) => any
  align?: "left" | "center" | "right"
  showOverflowTooltip?: boolean
  sortable?: boolean
  fixed?: boolean | "left" | "right"
}

const MyTable = defineComponent({
  props: {
    tableData: { type: Object as PropType<Pager<any, any, any> | Array<Dict<any>>>, required: true },
    columns: { type: Object as PropType<Dict<IColItem>>, required: true },
    actionConfig: { type: Object as PropType<IColItem> },
    isAction: { type: Boolean, default: false },
    height: { type: [String, Number] },
    border: { type: Boolean, default: true }
  },
  emits: ["selectionChange", "sortChange", "headerDragend", "lock"],
  render() {
    const action = () => {
      if (this.actionConfig && this.$slots.actionSlot) {
        return (
          <el-table-column
            label={this.actionConfig.label || "操作"}
            width={this.actionConfig.width || "180"}
            align={this.actionConfig.align || "center"}
            fixed="right"
            v-slots={{ default: (scope: ElRow) => this.$slots.actionSlot?.(scope) }}
          />
        )
      }
    }
    const header = (scope: any, item: IColItem) => {
      const field = (this.tableData as Pager<any, any, any>).listField?.listShowField?.find(
        (el) => el.fieldCode == scope.column.property
      )
      return (
        <div class={style.thead}>
          <span style="margin-right: 5px;">{item.label}</span>
          {field && (
            <el-icon
              size="20"
              color="#999"
              title={field.isLock ? "解锁" : "锁定"}
              onClick={() => this.$emit("lock", field)}
            >
              {field.isLock ? <Lock /> : <Unlock />}
            </el-icon>
          )}
        </div>
      )
    }
    return [
      <el-table
        class={style.tableBox}
        data={this.list}
        border={this.border}
        loading={this.loading}
        style={{ width: "100%", flex: this.height ? "unset" : 1 }}
        height={this.height}
        stripe
        onSort-change={(v: any) => this.$emit("sortChange", v)}
        onSelection-change={(v: any) => this.$emit("selectionChange", v)}
        onHeader-dragend={(n: number, o: number, col: any) => this.$emit("headerDragend", n, col)}
      >
        <el-table-column type="selection" width="45" align="center"></el-table-column>
        {Object.keys(this.columns).map((key) => {
          const item = this.columns[key]
          return (
            <el-table-column
              prop={key}
              label={item.label}
              width={item.width}
              align={item.align || "center"}
              sortable={item.sortable}
              formatter={item.formatter}
              fixed={item.fixed}
              show-overflow-tooltip={item.showOverflowTooltip}
              v-slots={{ header: (scope: ElRow) => header(scope, item) }}
            />
          )
        })}
        {action()}
      </el-table>,
      !Array.isArray(this.tableData) && this.tableData.pages > 1 && <Pagination pager={this.tableData} />
    ]
  },
  computed: {
    list() {
      return (this.tableData instanceof Pager ? this.tableData.items : this.tableData) || []
    },
    loading() {
      return this.tableData instanceof Pager ? this.tableData.loading : false
    }
  },
  methods: {}
})

export default MyTable
