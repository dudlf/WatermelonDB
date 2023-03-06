export type $Shape<T> = T

export type $NonMaybeType<T> = T

export type $ObjMap<O, T> = { [K in keyof O]: T }

export type $Keys<Type> = { k: keyof Type }

export type Array<Type> = Type[]

// TODO: FIX TS
export type $Call<F, T> = any

export type Class<T> = new (...args: any[]) => T
