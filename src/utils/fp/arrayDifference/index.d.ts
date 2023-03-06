export type ArrayDiff<T> = { added: T[]; removed: T[] }

export default function <A, T = A>(previousList: T[], nextList: T[]): ArrayDiff<T>
