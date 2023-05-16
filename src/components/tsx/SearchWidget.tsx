import { PageBase } from '@/components/tsx/PageBase';
import { withKeys, withModifiers } from 'vue';
import style from './SearchWidget.module.scss';

export default new (class SearchWidget extends PageBase<{}, IEvent, ISlots> {

	public render(): JSX.Element {
		return (
			<div class={[style.searchBox, 'box']}>
				<el-form
					ref="form"
					inline={true}
					class={['flex1', style.form]}
					onKeyup={withKeys(() => this.$emit('search'), ['enter'])}
					onSubmit={withModifiers(() => { }, ['prevent'])}
				>
					{this.$slots.default && this.$slots.default()}
					<el-form-item class={style.action}>
						{this.$slots.btns && this.$slots.btns()}
						<el-button type="primary" onClick={() => this.$emit('search')}>
							查询
						</el-button>
						<el-button type="default" onClick={() => this.$emit('reset')}>
							重置
						</el-button>
					</el-form-item>
				</el-form>
			</div>
		)
	}
})();
interface IEvent {
	search(): void;
	reset(): void
}
interface ISlots {
	default?: () => TsxEl;
	btns?: () => TsxEl;
}