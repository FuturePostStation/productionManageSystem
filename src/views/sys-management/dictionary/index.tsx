/**
 * Author: pwl330109371 330109371@qq.com
 * Date: 2023-06-13 23:14:33
 * LastEditors: pwl330109371 330109371@qq.com
 * LastEditTime: 2023-06-14 20:19:39
 */
import MyTable from "@/components/tsx/MyTable"
import editDialog from "./editDialog"
import SearchBar from "@/components/tsx/SearchBar"
import { PageBase } from "@/components/tsx/PageBase"
import { ITempRes } from "@/api/tsx/ListTestApi.js"

export default new (class TestPage extends PageBase {
  private get pager() {
    const list: AnyArray = []
    for (let index = 0; index < 10; index++) {
      list.push({ name: index + 1, status: "启用", name3: "fdgf" })
    }
    return list
  }

  private get columns() {
    return {
      name: { label: "字典值" },
      status: { label: "字典键" },
      name3: { label: "启用状态" },
      name4: { label: "排序" },
      name5: { label: "描述" }
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
                    placeholder="字典名称"
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
      <el-button type="text" onClick={() => this.addHandleClick(scope.row)}>
        <svg-icon name="push" />
      </el-button>,
      <el-button type="text" onClick={this.editHandleClick(scope.row)}>
        <svg-icon name="edit-blue" />
      </el-button>,
      <el-button type="text" onClick={() => this.deleteHandleClick(scope.row)}>
        <svg-icon name="delete-blue" />
      </el-button>
    ]
  }
  // 新增组织
  private async addHandleClick(row: any) {
    console.log("123123123", row)
    const dialog = new editDialog()
    const params = {
      name: "",
      pinyin: "",
      description: "",
      isParent: false
    }
    const res = await dialog.show(params, { title: "新增组织机构", width: "800px" })
    console.log("res", res)
  }

  private async editHandleClick(row: any) {
    console.log("123123123", row)
  }

  private async deleteHandleClick(row: any) {
    console.log("123123123", row)
  }

  private handleQuery() {
    console.log("搜索")
  }

  private resetQuery() {
    console.log("重置")
  }
})()
