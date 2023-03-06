import type { TableName, ColumnName } from '../Schema'

export type NonNullValue = number | string | boolean
export type NonNullValues = number[] | string[] | boolean[]
export type Value = NonNullValue | null
export type CompoundValue = Value | Value[]

export type Operator =
  | 'eq'
  | 'notEq'
  | 'gt'
  | 'gte'
  | 'weakGt'
  | 'lt'
  | 'lte'
  | 'oneOf'
  | 'notIn'
  | 'between'
  | 'like'
  | 'notLike'
  | 'includes'

export type ColumnDescription = Readonly<{ column: ColumnName; type?: symbol }>
export type ComparisonRight =
  | Readonly<{ value: Value }>
  | Readonly<{ values: NonNullValues }>
  | ColumnDescription
export type Comparison = Readonly<{ operator: Operator; right: ComparisonRight; type?: symbol }>

export type WhereDescription = Readonly<{
  type: 'where'
  left: ColumnName
  comparison: Comparison
}>

export type SqlExpr = Readonly<{ type: 'sql'; expr: string }>
export type LokiExpr = Readonly<{ type: 'loki'; expr: any }>

// eslint-disable-next-line no-use-before-define
export type Where = WhereDescription | And | Or | On | SqlExpr | LokiExpr
export type And = Readonly<{ type: 'and'; conditions: Where[] }>
export type Or = Readonly<{ type: 'or'; conditions: Where[] }>
export type On = Readonly<{
  type: 'on'
  table: TableName<any>
  conditions: Where[]
}>
export type SortOrder = 'asc' | 'desc'
export const asc: SortOrder
export const desc: SortOrder
export type SortBy = Readonly<{
  type: 'sortBy'
  sortColumn: ColumnName
  sortOrder: SortOrder
}>
export type Take = Readonly<{
  type: 'take'
  count: number
}>
export type Skip = Readonly<{
  type: 'skip'
  count: number
}>
export type JoinTables = Readonly<{
  type: 'joinTables'
  tables: TableName<any>[]
}>
export type NestedJoinTable = Readonly<{
  type: 'nestedJoinTable'
  from: TableName<any>
  to: TableName<any>
}>
export type LokiTransformFunction = (rawLokiRecords: any[], loki: any) => any[]
export type LokiTransform = Readonly<{
  type: 'lokiTransform'
  function: LokiTransformFunction
}>
export type SqlQuery = Readonly<{
  type: 'sqlQuery'
  sql: string
  values: Value[]
}>
export type Clause =
  | Where
  | SortBy
  | Take
  | Skip
  | JoinTables
  | NestedJoinTable
  | LokiTransform
  | SqlQuery

type NestedJoinTableDef = Readonly<{ from: TableName<any>; to: TableName<any> }>
export type QueryDescription = Readonly<{
  where: Where[]
  joinTables: TableName<any>[]
  nestedJoinTables: NestedJoinTableDef[]
  sortBy: SortBy[]
  take?: number
  skip?: number
  lokiTransform?: LokiTransformFunction
  sql?: SqlQuery
}>
