export interface IPage<T> {
	data: {
		records: number,
		rows: Array<T>
		total: number
	};
	msg: string;
	stat: number;
}

export type TFieldType = 'normal' | 'date' | 'dict';

export interface IPageQuery {
	offset?: number;
	limit?: number;
}
export interface IPageSort extends IPageQuery {
	asc?: boolean;
	keyword?: string;
	sortBy?: string;
	highSearch: Array<IHighSearch>;
}

export interface ILabelValue {
	label: string;
	value: string;
}
