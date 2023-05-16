import { Completer } from '@/utils/Completer';
import { hasId } from '@/utils/tools';
import ElementPlus from 'element-plus';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import cloneDeep from 'lodash-es/cloneDeep';
import { App, createApp, CreateComponentPublicInstance, defineComponent, reactive, Ref, ref } from 'vue';
import style from './Dialog.module.scss';


interface IDialogApp {
	app: App<Element>;
	config: Ref<IDialogConfig>;
	completer?: Completer<any>;
	container?: HTMLElement;
}

let oldVue: CreateComponentPublicInstance;
let dialogApps: Array<IDialogApp> = [];
let appCount = 1;

export abstract class DialogBase<TReturn = any, TParams = TReturn> {
	constructor() {
		this.initApp();
	}

	protected ruleForm: TParams = reactive<any>({});
	protected vue!: CreateComponentPublicInstance;
	protected config!: Ref<IDialogConfig>;
	private curIns!: IDialogApp;

	protected abstract init(param?: TParams): void;
	protected abstract confirm(): void;

	protected abstract content(): TsxEl;
	protected footer(): TsxEl | void { }

	private initApp() {
		let that = this;
		dialogApps.push({ app: null as any, config: ref({ visible: false }) });
		let app = createApp(
			defineComponent({
				data() {
					return dialogApps[dialogApps.length - 1].config;
				},
				render() {
					const dialogConfig = dialogApps[dialogApps.length - 1].config;
					if (!oldVue || oldVue != this) oldVue = this as any;
					const isDrawer = dialogConfig.value.type == 'drawer';
					const title = dialogConfig.value.title || (dialogConfig.value.isEdit ? '编辑' : '添加');
					const footerSlot = () => {
						const footer = that.footer();
						if (footer) {
							return footer;
						} else {
							if (dialogConfig.value.notAction) return;
							return (
								<div class={[isDrawer ? style.action : '']}>
									<el-button onClick={() => that.close()}>取 消</el-button>
									<el-button type="primary" onClick={() => that.confirm()}>
										确 定
									</el-button>
								</div>
							);
						}
					};
					if (isDrawer) {
						return (
							<el-drawer
								class={style.drawerBox}
								title={title}
								v-model={dialogConfig.value.visible}
								size={dialogConfig.value.width || '600px'}
								before-close={() => that.close()}
								append-to-body
								v-slots={{ footer: footerSlot, default: () => that.content() }}
							></el-drawer>
						);
					} else {
						return (
							<el-dialog
								class={style.dialogBox}
								title={title}
								v-model={dialogConfig.value.visible}
								width={dialogConfig.value.width || '50%'}
								before-close={() => that.close()}
								append-to-body
								v-slots={{ footer: footerSlot, default: () => that.content() }}
							></el-dialog>
						);
					}
				},
			})
		);
		app.use(ElementPlus, { locale: zhCn });
		if (dialogApps.length) {
			const div = document.createElement('div');
			div.id = `dialogContainer${appCount}`;
			document.body.appendChild(div);
			app.mount(`#dialogContainer${appCount}`);
			appCount++;
			this.lastDialog.container = div;
		} else {
			app.mount('#dialogContainer');
		}
		this.lastDialog.app = app;
		this.curIns = this.lastDialog;
	}

	private get lastDialog(){
		return dialogApps[dialogApps.length - 1]
	}

	private get dialogConfig() {
		return this.curIns.config;
	}

	public show(): Promise<TReturn>;
	public show(param: TParams): Promise<TReturn>;
	public show(params: TParams, config?: IDialogConfig): Promise<TReturn>;
	public show(params?: TParams, config?: IDialogConfig): Promise<TReturn> {
		this.ruleForm = reactive<any>({});
		if (this.curIns.completer) throw '对话框已打开';
		this.vue = oldVue;
		this.curIns.completer = new Completer<TReturn>();
		this.dialogConfig.value = { visible: false };
		if (arguments.length > 1) {
			if (config) this.dialogConfig.value = config;
			if (params && hasId(params)) this.dialogConfig.value.isEdit = true;
		}
		this.dialogConfig.value.visible = true;
		this.config = this.dialogConfig;
		this.init(cloneDeep(params));
		return this.curIns.completer.future();
	}

	public close(params?: TReturn) {
		// console.log('close --- ', this.curIns.completer, this.dialogConfig.value);
		if (this.curIns.completer) {
			this.dialogConfig.value.visible = false;
			this.curIns.completer!.complete(params as any);
			this.curIns.completer = null as any;
			// console.log(' reset ---');
		}
		this.lastDialog.app?.unmount();
		this.lastDialog.container?.remove();
		dialogApps.pop();
	}
}

export interface IDialogConfig {
	visible?: boolean;
	isEdit?: boolean;
	title?: string;
	width?: string;
	type?: 'dialog' | 'drawer';
	className?: string;
	notAction?: boolean;
	onConfirm?: (...arg: any) => boolean | undefined | Promise<boolean | undefined>;
}
