import {
  Component,
  ComponentObjectPropsOptions,
  ComponentPublicInstance,
  ComputedOptions,
  CreateComponentPublicInstance,
  MethodOptions,
  VNode,
  getCurrentInstance
} from "vue"

let dataQueue: Dict = {}
const whiteListAttr = ["self", "emits", "expose", "slots", "methods", "props", "computed"]
const whiteListMethods = ["constructor", "setup", "render", "created", "mounted"]

export abstract class PageBase<Props = {}, PrefixedEvents = {}> {
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

  public setup() {
    const ins = getCurrentInstance()
    if (ins?.refs) {
      setTimeout(() => {
        for (const key in ins!.refs) {
          ins!.data[key] = ins!.refs[key]
        }
      }, 0)
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
type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never
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
