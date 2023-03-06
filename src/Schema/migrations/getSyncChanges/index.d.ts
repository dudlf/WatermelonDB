import type { SchemaMigrations } from '../index'
import type { TableName, ColumnName, SchemaVersion } from '../../index'

export type MigrationSyncChanges = {
  from: SchemaVersion
  tables: TableName<any>[]
  columns: {
    table: TableName<any>
    columns: ColumnName[]
  }[]
} | null

export default function getSyncChanges(
  migrations: SchemaMigrations,
  fromVersion: SchemaVersion,
  toVersion: SchemaVersion,
): MigrationSyncChanges
