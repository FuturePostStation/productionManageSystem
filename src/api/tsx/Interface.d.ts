export interface IPage<T> {
	list: Array<T>;
	total: number;
	pages: number;
}

export type TFieldType = 'normal' | 'date' | 'dict';

interface IFieldBase {
	fieldCode: string;
	fieldName: string;
}
export interface IHighQueryField extends IFieldBase {
	dictCode: string;
	fieldType: TFieldType;
}

export interface IPageQuery {
	page?: number;
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

export interface IExportTemp {
	id: string;
	itemText: string;
	requestUrl: string;
}
