import type { ColumnSchema, TableName, TableSchema, TableSchemaSpec, SchemaVersion } from '../index'

export type CreateTableMigrationStep = Readonly<{
  type: 'create_table'
  schema: TableSchema
}>

export type AddColumnsMigrationStep = Readonly<{
  type: 'add_columns'
  table: TableName<any>
  columns: ColumnSchema[]
  unsafeSql?: (_: string) => string
}>

export type SqlMigrationStep = Readonly<{
  type: 'sql'
  sql: string
}>

export type MigrationStep = CreateTableMigrationStep | AddColumnsMigrationStep | SqlMigrationStep

type Migration = Readonly<{
  toVersion: SchemaVersion
  steps: MigrationStep[]
}>

type SchemaMigrationsSpec = Readonly<{
  migrations: Migration[]
}>

export type SchemaMigrations = Readonly<{
  validated: true
  minVersion: SchemaVersion
  maxVersion: SchemaVersion
  sortedMigrations: Migration[]
}>

export function schemaMigrations(migrationSpec: SchemaMigrationsSpec): SchemaMigrations

export function createTable(tableSchemaSpec: TableSchemaSpec): CreateTableMigrationStep

export function addColumns({
  table,
  columns,
  unsafeSql,
}: {
  table: TableName<any>
  columns: ColumnSchema[]
  unsafeSql?: (_: string) => string
}): AddColumnsMigrationStep

export function unsafeExecuteSql(sql: string): SqlMigrationStep
