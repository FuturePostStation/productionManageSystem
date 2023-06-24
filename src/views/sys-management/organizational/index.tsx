/**
 * Author: pwl330109371 330109371@qq.com
 * Date: 2023-06-13 23:14:33
 * LastEditors: pwl330109371 330109371@qq.com
 * LastEditTime: 2023-06-24 20:31:01
 */
import MyTable from "@/components/tsx/MyTable"
import OrganizationalDialog from "./organizationalDialog"
import SearchBar from "@/components/tsx/SearchBar"
import { PageBase } from "@/components/tsx/PageBase"
import { ITempRes } from "@/api/tsx/ListTestApi.js"
import OriginApi, { OriginAdd, OriginRes, OriginQuery } from "./commApi"
import { Pager } from "@/api/tsx/Pager"
export default new (class TestPage extends PageBase {
  private query: OriginQuery = {}
  private selected: Array<OriginRes> = []
  private api = new OriginApi()

  private pager = new Pager(this.api, this.api.page, () => this.query)

  created(): void {
    this.pager.refresh()
  }
  private get columns() {
    return {
      orgName: { label: "名称" },
      orgPinyin: { label: "拼音" },
      name3: { label: "员工数" }
    }
  }

  private get queryParams() {
    return {
      deptDto: {
        deptName: "",
        status: ""
      }
    }
  }

  public render(): JSX.Element {
    return (
      <div class="app-container">
        <SearchBar>
          {{
            form: () => (
              <el-form ref="queryForm" model={this.queryParams} inline={true}>
                <el-form-item class="zs_form-item" prop="deptName">
                  <el-input
                    v-model={this.queryParams.deptDto.deptName}
                    placeholder="部门名称"
                    onKeyupEnter={this.handleQuery}
                  />
                </el-form-item>
                <div class="form_btn">
                  <el-button plain onClick={this.handleQuery}>
                    <svg-icon name="search2" />
                    搜索
                  </el-button>
                  <el-button plain onClick={this.resetQuery}>
                    <svg-icon name="clear" />
                    清空
                  </el-button>
                </div>
              </el-form>
            ),
            btnright: () => (
              <el-button type="primary" onClick={this.addHandleClick}>
                添加
              </el-button>
            )
          }}
        </SearchBar>
        <MyTable
          ref="tableRef"
          row-key="id"
          tableData={this.pager}
          columns={this.columns}
          actionConfig={{ width: "160px" }}
          v-slots={{ actionSlot: this.actionSlot }}
        ></MyTable>
      </div>
    )
  }

  private actionSlot(scope: ElRow<ITempRes>) {
    return [
      <el-button type="primary" link onClick={() => this.addHandleClick(scope.row)}>
        新增
      </el-button>
    ]
  }

  // 新增组织
  private async addHandleClick(row: any) {
    console.log("123123123", row)
    const dialog = new OrganizationalDialog()
    const params = {
      isParent: 0,
      orgCode: "",
      orgDescribe: "",
      orgId: "",
      orgLat: "",
      orgLevel: 0,
      orgLng: "",
      orgMername: "",
      orgName: "",
      orgParent: row.orgId || 0,
      orgPath: "",
      orgPinyin: "",
      orgSeq: 0,
      orgSname: ""
    }
    const res = await dialog.show(params, { title: "新增组织机构", width: "800px" })
    console.log("res", res)
  }

  private handleQuery() {
    console.log("搜索")
  }

  private resetQuery() {
    console.log("重置")
  }
})()
