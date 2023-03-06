import { Key } from 'react'

export default function allPromisesObj<T, Spec = { [key: Key]: Promise<T> }>(
  promisesObj: Spec,
): Promise<{
  [K in keyof Spec]: Awaited<Spec[K]>
}>
