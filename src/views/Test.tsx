import MyTable from "@/components/tsx/MyTable"
import { PageBase } from "@/components/tsx/PageBase"

export default new (class TestPage extends PageBase {
  private get pager() {
    const list: AnyArray = []
    for (let index = 0; index < 10; index++) {
      list.push({ name: index + 1, name2: "asd", name3: "fdgf" })
    }
    return list
  }

  private get columns() {
    return {
      name: { label: "asd" },
      name2: { label: "fdfdg" },
      name3: { label: "asfdgfd" }
    }
  }

  public render(): JSX.Element {
    return (
      <div class="app-container">
        <MyTable ref="tableRef" tableData={this.pager} columns={this.columns}></MyTable>
      </div>
    )
  }
})()
