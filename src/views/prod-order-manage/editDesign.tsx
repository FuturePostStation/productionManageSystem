/*
 * @Author: tzx_sujie 1354146900@qq.com
 * @Date: 2023-05-19 16:12:48
 * @LastEditors: tzx_sujie 1354146900@qq.com
 * @LastEditTime: 2023-05-24 16:27:51
 */
import { PageBase } from "@/components/tsx/PageBase"
import Upload from "@/components/tsx/Upload"
import router from "@/router"
import style from "./editDesign.module.scss"
import { useRoute } from "vue-router"
import { TabsPaneContext } from "element-plus"

export default new (class EditDesign extends PageBase {
  private ruleForm = { pdfList: [] as AnyArray }
  private actType: TPageActType = "add"
  private id = ""
  private selectedTab = ""
  private toBeSelectedTab = ""
  private tabs = [
    { label: "物料", value: "material" },
    { label: "部件", value: "component" },
    { label: "产品", value: "prod" }
  ]

  public created() {
    const route = useRoute()
    this.actType = (route.params.type as TPageActType) || "add"
    this.id = (route.params.id as string) || ""
  }

  public render(): JSX.Element {
    return (
      <div class="app-container">
        <div class="zh-form-page">
          <div class="zh-page-head">
            <div class="zh-page-head_left">
              <span>工艺设计</span>
            </div>
            <div class="zh-page-head_right">
              <el-button type="default" onClick={() => router.back()}>
                取消
              </el-button>
              <el-button type="primary" onClick={() => this.save()}>
                保存
              </el-button>
              <el-button type="primary" onClick={() => this.submit()}>
                提交
              </el-button>
            </div>
          </div>
          <div class="editMain">
            <div class={style.designBox}>
              <div class={style.selected}>
                <el-tabs
                  v-model={this.selectedTab}
                  type="card"
                  class="demo-tabs"
                  onTab-click={(v: TabsPaneContext) => this.tabClick(v, "selected")}
                >
                  {this.tabs.map((item) => (
                    <el-tab-pane label={"已选" + item.label} name={item.value} />
                  ))}
                </el-tabs>
                <div>已选列表</div>
              </div>
              <div class={style.toBeSelected}>
                <el-tabs
                  v-model={this.toBeSelectedTab}
                  type="card"
                  class="demo-tabs"
                  onTab-click={(v: TabsPaneContext) => this.tabClick(v, "toBeSelected")}
                >
                  {this.tabs.map((item) => (
                    <el-tab-pane label={item.label + "库"} name={item.value} />
                  ))}
                </el-tabs>
                <div>待选列表</div>
              </div>
            </div>
            <div class="pdfList">
              {this.ruleForm.pdfList.map((item) => (
                <div class="pdfItem">
                  <Upload v-model={item.imagePath} disabled={this.actType == "look"} />
                  <div class="pdfName">{item.name}</div>
                </div>
              ))}
              <div class="pdfItem">
                <Upload disabled={this.actType == "look"} />
                <div class="pdfName">上传文件</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  private tabClick(tab: TabsPaneContext, type: "selected" | "toBeSelected") {
    console.log(tab, type)
  }

  private save() {}
  private submit() {}
})()
