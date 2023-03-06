// lightweight type-only Result (Success(T) | Error) monad
export type Result<T> = { value: T } | { error: Error }

export type ResultCallback<T> = (r: Result<T>) => void

export function toPromise<T>(withCallback: (r: ResultCallback<T>) => void): Promise<T>

export function fromPromise<T>(promise: Promise<T>, callback: ResultCallback<T>): void

export function mapValue<T, U>(mapper: (_: T) => U, result: Result<T>): Result<U>
