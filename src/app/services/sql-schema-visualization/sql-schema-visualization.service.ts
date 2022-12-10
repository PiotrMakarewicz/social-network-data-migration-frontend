import { Injectable } from '@angular/core';
import { DatabaseInfo, TableInfo } from 'src/app/interfaces/payloads';
import { Table, Schema } from '../../interfaces/sql-displayable-schema';

@Injectable({
  providedIn: 'root'
})
export class SqlSchemaVisualizationService {

  constructor() { }

  toDisplayableSchema(databaseInfo: DatabaseInfo): Schema {
    return {
      tables: databaseInfo.tables.map(this.toDisplayableTable.bind(this))
    }
  }

  toDisplayableTable(tableInfo: TableInfo): Table{
    return {
      name: tableInfo.tableName,
      columns: tableInfo.columns.map(
        (column) => { 
          let foreignKey = null;
          for (let fkCol of tableInfo.foreignKeyColumns){
            if (fkCol.foreignKeyColumn.columnName == column.columnName) {
              foreignKey = [fkCol.referencedColumn.tableName, fkCol.referencedColumn.columnName].join('.')
            }
          }
          return {
            name: column.columnName,
            type: column.type,
            foreignKey: foreignKey
          } 
        }
      )
    }
  }
}
