import type { Observable } from '../utils/rx'

import type Model from '../Model'
import type { RecordId } from '../Model'
import type { ColumnName, TableName } from '../Schema'

export type Options = {
  isImmutable: boolean
}

// Defines a one-to-one relation between two Models (two tables in db)
// Do not create this object directly! Use `relation` or `immutableRelation` decorators instead
export default class Relation<T extends Model> {
  // Used by withObservables to differentiate between object types
  static _wmelonTag: string

  _model: Model

  _columnName: ColumnName

  _relationTableName: TableName<NonNullable<T>>

  _isImmutable: boolean

  // TODO: FIX TS
  // @lazy
  _cachedObservable: Observable<T>

  constructor(
    model: Model,
    relationTableName: TableName<NonNullable<T>>,
    columnName: ColumnName,
    options: Options,
  )

  // TODO
  // does it can be null or undefined?
  get id(): RecordId | null | undefined

  set id(newId: RecordId | null | undefined)

  fetch(): Promise<T>

  then<U>(
    onFulfill?: (value: T) => Promise<U> | U,
    onReject?: (error: any) => Promise<U> | U,
  ): Promise<U>

  set(record: T): void

  observe(): Observable<T>
}
