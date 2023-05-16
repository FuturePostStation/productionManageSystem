export function hasId(obj: any): obj is IHasId {
	return !!(obj as any).id;
}
interface IHasId {
	id: any;
}