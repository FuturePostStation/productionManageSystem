interface Storage {
	storageMode: 'localStorage' | 'sessionStorage';
	projectName: string;
	projectCode: string;
	orderNo: string;
}

interface ElRow<T = any> {
	row: T;
	$index: number;
}
interface ElColSort<T> {
	column: any;
	order: 'ascending' | 'descending';
	prop: string;
}
interface Window {
	[key: string]: any;
}
interface Dict<T = any> {
	[key: string]: T;
}
type AnyArray = Array<any>;
declare type TsxEl = JSX.Element | JSX.Element[];
