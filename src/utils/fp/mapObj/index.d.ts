type MapObj2 = <T, Key, Obj = { [key: string]: T }, U = any, Fn = (_: T, __: Key, ___: Obj) => U>(
  fn: Fn,
  obj: Obj,
) => {
  [K in keyof Obj]: U
}
type MapObjCur = <T, Key, Obj = { [key: string]: T }, U = any, Fn = (_: T, __: Key, ___: Obj) => U>(
  fn: Fn,
) => (_: Obj) => {
  [K in keyof Obj]: U
}
type MapObj = MapObj2 & MapObjCur

declare function mapObj(fn: (a: any, b: string, c: any) => any, obj: {}): MapObj

export default mapObj
