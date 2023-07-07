#### Software architecture

- Vue
- Vite
- pnpm
- element-plus
- typescript
- JSX | TSX
- scss

#### Installation tutorial

1.  Installation dependency：pnpm i

If an environment error occurs, perform the following steps
node.js version 18.16.0
npm version 9.5.1
pnpm version 8.5.1
vue version 3.3.4
vite version 4.3.8
sass version 1.62.1
typescript version 5.0.4

### Instructions for use

#### develop

1. development：pnpm dev
2. production: pnpm prod
3. watch TS: pnpm watch

#### build

1. test：pnpm build:test
2. production：pnpm build
3. preview：pnpm preview

---

## Component Usage Instructions

### Basic components

#### Table Supports Tables tree, indexing, and multiple selection

[MyTable]: ./src/components/MyTable.tsx
[MenuManage]: ./src/views/system/MenuManage.tsx

```tsx
const columns: Dict<IColItem> = {
  menuName: { label: "menuName" },
  menuFlag: { label: "menuType", formatter: (r, c, v: number) => (v < 2 ? "menu" : "button") },
  icon: { label: "icon" },
  path: { label: "path" },
  perms: { label: "permission" },
  sort: { label: "sort", width: "60" }
}
const list = []

/** Action Slot */
const tableBtns = (scope: ElRow) => {
  return [
    <el-button type="primary" link size={CONFIG.buttonSize} onClick={() => this.addSubMenu(scope.row)}>
      Add
    </el-button>
  ]
}
;<MyTable
  rowKey="id"
  tableData={list}
  columns={columns}
  actionConfig={{ width: "180" }}
  v-slots={{ actionSlot: tableBtns }}
/>
```

#### Upload Supports drag and drop, multiple selection, and preprocessing

[MyUpload]: ./src/components/MyUpload.tsx

```tsx
<MyUpload
  v-model={this.xxx}
  uploadUrl="candidate/upload"
  accept="image/*"
  fileName="resumeFile"
  onSuccess={this.onSuccess}
/>
```

#### List component, automatically implementing table CURD, including header search area and table content area

[ListView]: ./src/components/ListView.tsx

```tsx
import RoleApi, { IRoleQuery, IRoleRes } from "@/apis/system/RoleApi"
import ListView from "@/components/ListView"
import { IColItem } from "@/components/MyTable"
import { PageBase } from "@/components/PageBase"
import { RoleDialog } from "@/components/dialog/system/RoleDialog"

/** Example */
export default new (class RoleManage extends PageBase {
  /** This API inherits from CommonAPi and includes the standard CURD interface */
  private api = new RoleApi()
  /** Search Object */
  private query: IRoleQuery = {}

  public render() {
    /** Page view, if there are no other nodes, simply return to lietView, including search and table */
    return (
      <ListView
        api={this.api}
        query={this.query}
        /** If adding and editing a page as a pop-up window requires this parameter, editDialog inherits from DialogBase，#DialogBase Example */
        dialogConfig={{ editDialog: RoleDialog }}
        /** Table configuration, specific parameters can be found in listView->IProp */
        tableConfig={{ setColumns: this.setColumns, notDel: true, actionConfig: { width: "160" } }}
        /** The specific parameters of the slot are shown in listView->ISlot */
        vSlots={{ searchItems: this.searchItems, tableAction: this.tableAction }}
      />
    )
  }

  /** Search for area slots and add corresponding nodes */
  private searchItems() {
    return [
      <el-form-item label="name">
        <el-input v-model={this.query.keyword} placeholder="Enter" />
      </el-form-item>
    ]
  }

  /** Meter header configuration */
  private setColumns(cols: Dict<IColItem>) {
    Object.assign(cols, {
      code: { label: "code" },
      name: { label: "name" },
      description: { label: "description" },
      createTime: { label: "createTime" }
    } as Dict<IColItem>)
  }

  /** Table operation slot */
  private tableAction(scope: ElRow<IRoleRes>) {
    return []
  }
})()
```

### Global Code Fragment

- Page pageBase
- Component comBase
- List listView
- Dialog dialogPage

#### Page or component inheritance PageBase

[pagebage]: ./src/components/PageBase.tsx

```tsx
import { PageBase } from "@/components/PageBase"
import { ComponentObjectPropsOptions } from "vue"

/** Pages that inherit from PageBase do not need to use ref reactive */
export default new (class ClassName extends PageBase<IProps, IEvent, ISlot> {
  /** Props, At this point, the associated IProps declaration cannot be written */
  protected props: ComponentObjectPropsOptions<IProps> = {}

  /** The event association IEvent sent out cannot be written  */
  public emits: (keyof IEvent<Res>)[] = []

  /** Exposed attributes and methods need not be written  */
  public expose: (string | number)[] = []

  /** Example of using node ref */
  private demoRef: InstanceType<typeof ElForm> = null as any

  public render(): JSX.Element {
    // Return to page node here
    return (
      <div>
        <div ref="demoRef" onClick={this.onClick}></div>
      </div>
    )
  }

  private onClick() {
    this.demoRef.validate()
  }
})()
/** Props  */
interface IProps {}

interface IEvent {}

interface ISlot {}
```

#### Dialog extends DialogBase

[dialogBase]: ./src/components/dialog/DialogBase.tsx

```tsx
import { DialogBase } from "@/components/dialog/DialogBase"

/** DialogBase Receive three generics  TReturn  TParams  IForm
 * DialogBase members
 * @property {TParams} ruleForm: Forms
 * @property {CreateComponentPublicInstance} vue Vue The instance object here is equivalent to this
 * @property {IDialogConfig} config Dialog Config
 */
export default class DialogName extends DialogBase<TReturn, TParams, IForm> {
  constructor() {
    super()
  }

  protected init(param?: TParams): void {
    // Processing the parameters passed here is equivalent to Prop
    if (param) Object.assign(this.ruleForm, param)
  }

  protected footer() {
    // The bottom button area defaults to cancel/confirm, and can be customized according to needs
  }

  protected content(): JSX.Element {
    return <div>content</div>
  }

  protected confirm() {
    // Calling the OK button here can handle the relevant logic
  }
}
```

#### API extends ApiBase

[ApiBase]: ./src/apis/common/ApiBase.ts
[CommonApi]: ./src/apis//common/CommonApi.ts

```ts
import { ApiBase } from "./ApiBase"
import { IPage, IPageSort } from "./Interface"

/** ApiBase Is the request base class containing get、post、put、delete、download */
export class DemoApi extends ApiBase {
  constructor(urlPrefix: string) {
    super()
  }

  public page() {
    return this.get(url, params, AxiosRequestConfig)
  }
}

/** If it is a table type page, it can be inherited  CommonApi
 * CommonApi Receive three generics: IDemoAdd、IDemoRes、IDemoQuery
 */
import { CommonApi } from "../common/CommonApi"
import { IPageQuery } from "../common/Interface"

export default class DemoApi extends CommonApi<IDemoAdd, IDemoRes, IDemoQuery> {
  constructor() {
    super("/station")
  }

  // Please implement other methods besides curd yourself
  public modifyStatus(id: string, status: number) {
    // Here [urlPrefix] represents the path prefix passed by super
    return this.post(`${this.urlPrefix}/modify`, { id, status })
  }
}

/** extends IPageQuery, Own pageNo pageSize members */
export interface IDemoQuery extends IPageQuery {
  name?: string
}
export interface IDemoAdd {
  name: string
}
export interface IDemoRes extends IDemoAdd {}
```
