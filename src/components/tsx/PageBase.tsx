import { UnionToIntersection } from "@vue/shared"
import {
  Component,
  ComponentObjectPropsOptions,
  ComponentPublicInstance,
  ComputedOptions,
  defineComponent,
  MethodOptions,
  PropType,
  ref,
  SetupContext,
  VNode,
  CreateComponentPublicInstance,
  getCurrentInstance,
  nextTick
} from "vue"

let dataQueue: Dict = {}
const whiteListAttr = ["self", "isCollection", "emits", "expose", "slots", "methods", "props", "computed"]
const whiteListMethods = ["constructor", "setup", "render", "created", "mounted"]

export abstract class PageBase<Props = {}, PrefixedEvents = {}, ScopedSlotArgs = {}> {
  constructor() {
    const prototype = Object.getPrototypeOf(this)
    // console.log(prototype);
    const keys = Reflect.ownKeys(prototype)
    // console.log(this);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i] as string
      if (whiteListMethods.includes(key)) continue
      const keyDesc = Object.getOwnPropertyDescriptor(prototype, key)!
      // console.log('m key', key, this.constructor.name, this[key], keyDesc);
      if (keyDesc.get) {
        this.computed[key] = keyDesc.get
      } else {
        this.methods[key] = this[key]
      }
    }
  }

  public get data() {
    dataQueue = {}
    for (const key in this) {
      if (whiteListAttr.includes(key)) continue
      const v = (this as any)[key]
      dataQueue[key] = v
    }
    return () => dataQueue
  }

  public setup(prop: Props, ctx: SetupContext<Array<keyof PrefixedEvents>>) {
    const ins = getCurrentInstance()
    if (ins?.refs) {
      nextTick(() => {
        for (const key in ins!.refs) {
          ins!.data[key] = ins!.refs[key]
        }
      })
    }
  }

  /** 发送出去的事件 */
  public readonly emits: Array<keyof PrefixedEvents> = []
  /** 组件暴漏出去的方法 */
  public readonly expose: Array<keyof typeof this.methods> = []
  /** 方法集合 */
  public readonly methods: MethodOptions = {}
  public readonly computed: ComputedOptions = {}
  public readonly components: Record<string, Component> = {}
  protected readonly props: ComponentObjectPropsOptions<Props> = {} as any

  public abstract render(): JSX.Element
}
// @ts-ignore
export interface PageBase<Props extends Dict = {}, PrefixedEvents extends EmitsOptions = {}, ScopedSlotArgs = {}>
  extends ComponentPublicInstance,
    CreateComponentPublicInstance,
    Props,
    CreateElement<Props> {
  $slots: ScopedSlotArgs
  $emit: EmitFns<PrefixedEvents>
  created(): void
  mounted(): void
}
type EmitFns<Options, Event extends keyof Options = keyof Options> = UnionToIntersection<
  {
    [key in Event]: Options[key] extends (...args: infer Args) => any
      ? (event: key, ...args: Args) => void
      : (event: key, ...args: any[]) => void
  }[Event]
>
interface CreateElement<Props> {
  (tag?: string | Component<Props, any, any, any> | (() => Component), children?: VNode[]): VNode
  (tag?: string | Component<Props, any, any, any> | (() => Component), data?: any, children?: VNode[]): VNode
  new (tag?: string | Component<Props, any, any, any> | (() => Component), children?: VNode[]): any
}

export const Test1 = defineComponent({
  expose: ["init"],
  methods: {
    init() {}
  }
})

export const Test3 = defineComponent({
  setup(props, ctx) {
    const test1 = ref<InstanceType<typeof Test1>>()
    test1.value?.init
  }
})
export const Test2 = new (class Test2 extends PageBase<ITestProps, IEvent, ISlots> {
  constructor() {
    super()
  }
  protected props: ComponentObjectPropsOptions<ITestProps> = {
    qwe: String,
    typeList: { type: Array as PropType<AnyArray> }
  }
  public emits: (keyof IEvent)[] = ["init"]

  public render(): JSX.Element {
    // console.log('Test2: ', this.qwe, this.$props);
    // if (this.$slots.footer) this.$slots.footer();
    // this.$emit('init', '');
    return (
      <div>
        content
        <div ref="nodeRef"></div>
      </div>
    )
  }
})()

interface ITestProps {
  /** 插槽声明 目前还未找到 v-slots 的类型关联声明 */
  vSlots?: ISlots
  qwe: string
  typeList: AnyArray
  asd?: string
}
type IEvent = {
  init(asd: string): void
  search(v: string): void
}
interface ISlots {
  default: () => TsxEl
  footer?: () => TsxEl
}
