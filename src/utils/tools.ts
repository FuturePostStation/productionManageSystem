export function hasId(obj: any, idKey = "id"): obj is IHasId {
  return !!(obj as any)[idKey]
}
interface IHasId {
  id: any
}
