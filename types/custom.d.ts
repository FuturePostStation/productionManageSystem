/*
 * @Author: tzx_sujie 1354146900@qq.com
 * @Date: 2023-05-18 15:21:46
 * @LastEditors: tzx_sujie 1354146900@qq.com
 * @LastEditTime: 2023-05-18 15:25:26
 */
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
interface ElColSort {
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

type TPageActType = 'add' | 'edit' | 'look'
