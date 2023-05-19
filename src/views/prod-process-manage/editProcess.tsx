/*
 * @Author: tzx_sujie 1354146900@qq.com
 * @Date: 2023-05-19 14:23:21
 * @LastEditors: tzx_sujie 1354146900@qq.com
 * @LastEditTime: 2023-05-19 15:54:25
 */
import { IColItem } from "@/components/tsx/MyTable"
import { PageBase } from "@/components/tsx/PageBase"
import router from "@/router"
import { useRoute } from "vue-router"

type TPageType = "inspect" | "audit" | "report" | "delivery"

export default new (class EditProcess extends PageBase {
  private pageType: TPageType = "report"
  private actType: TPageActType = "add"
  private id = ""

  public created() {
    const route = useRoute()
    this.pageType = (route.params.pageType as TPageType) || "order"
    this.actType = (route.params.type as TPageActType) || "add"
    this.id = (route.params.id as string) || ""
  }

  private get columns(): Dict<IColItem> {
    let cols: Dict<IColItem> = {}
    if (this.pageType == "audit" || this.pageType == "report") {
      cols = {
        name: { label: "生产订单名称" },
        date: { label: "累计完成数量" },
        address: {
          label: "当日完成数量",
          formatter: (row, col, val) => {
            return this.isLook ? val : <el-input-number v-model={row[val]} step={1} step-strictly min={0} />
          }
        }
      }
      if (this.pageType == "report") cols["fil23"] = { label: "提交状态" }
    } else {
      cols = {
        name: { label: "生产订单名称" },
        fieldName2: { label: "订单交付数量" },
        date: { label: "累计交付数量" },
        address: {
          label: "本次交付数量",
          formatter: (row, col, val) => {
            return this.isLook ? val : <el-input-number v-model={row[val]} step={1} step-strictly min={0} />
          }
        }
      }
      if (this.pageType == "delivery") cols["field2"] = { label: "提交状态" }
    }
    return cols
  }

  private get isLook() {
    return this.actType == "look"
  }

  private get isOperational() {
    return this.pageType == "audit" || this.pageType == "inspect"
  }

  private tableData = [
    { id: 1, date: "2016-05-02", name: "wangxiaohu", address: "No. 189, Grove St, Los Angeles" },
    { id: 2, date: "2016-05-04", name: "wangxiaohu", address: "No. 189, Grove St, Los Angeles" },
    {
      id: 3,
      date: "2016-05-01",
      name: "wangxiaohu",
      address: "No. 189, Grove St, Los Angeles",
      children: [
        {
          id: 31,
          date: "2016-05-01",
          name: "wangxiaohu",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          id: 32,
          date: "2016-05-01",
          name: "wangxiaohu",
          address: "No. 189, Grove St, Los Angeles"
        }
      ]
    },
    { id: 4, date: "2016-05-03", name: "wangxiaohu", address: "No. 189, Grove St, Los Angeles" }
  ]

  public render(): JSX.Element {
    return (
      <div class="editBox">
        <div class="editMain">
          <el-table data={this.tableData} border row-key="id">
            {Object.keys(this.columns).map((key) => {
              const item = this.columns[key]
              return <el-table-column prop={key} label={item.label} width={item.width} formatter={item.formatter} />
            })}
            {this.isOperational && <el-table-column label="操作" width="120" v-slots={{ default: this.actionSlot }} />}
          </el-table>
        </div>
        <div class="editActbox">
          <el-button type="default" onClick={() => router.back()}>
            取消
          </el-button>
        </div>
      </div>
    )
  }

  private actionSlot(scope: ElRow<any>) {
    return [
      <el-button type="default" onClick={() => this.audit(scope.row.id)}>
        审核
      </el-button>
    ]
  }

  private audit(id: number) {
    console.log(id)
  }
})()
