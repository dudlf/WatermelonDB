type FilterObj2 = <T, Key, Obj = { [Key: string]: T }, Fn = (_: T, __: Key, ___: Obj) => boolean>(
  fn: Fn,
  obj: Obj,
) => Partial<Obj>
type FilterObjCur = <T, Key, Obj = { [Key: string]: T }, Fn = (_: T, __: Key, ___: Obj) => boolean>(
  fn: Fn,
) => (_: Obj) => Partial<Obj>

type FilterObj = FilterObj2 & FilterObjCur

declare function filterObj(): FilterObj

export default filterObj
