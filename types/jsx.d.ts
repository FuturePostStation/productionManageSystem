// @ts-ignore
export interface PageBase<Props extends Dict = {}, PrefixedEvents extends EmitsOptions = {}, ScopedSlotArgs = {}>
	extends ComponentPublicInstance,
	CreateComponentPublicInstance,
	Props,
	CreateElement<Props> {
	$slots: ScopedSlotArgs;
	$emit: EmitFns<PrefixedEvents>;
	created(): void;
	mounted(): void;
}
type EmitFns<Options, Event extends keyof Options = keyof Options> = UnionToIntersection<
	{
		[key in Event]: Options[key] extends (...args: infer Args) => any ? (event: key, ...args: Args) => void : (event: key, ...args: any[]) => void;
	}[Event]
>;
interface CreateElement<Props> {
	(tag?: string | Component<Props, any, any, any> | (() => Component), children?: VNode[]): VNode;
	(tag?: string | Component<Props, any, any, any> | (() => Component), data?: any, children?: VNode[]): VNode;
	new(tag?: string | Component<Props, any, any, any> | (() => Component), children?: VNode[]): any;
}