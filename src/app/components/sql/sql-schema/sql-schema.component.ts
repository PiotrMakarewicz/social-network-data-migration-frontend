import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../../services/backend/backend.service';
import { ColumnInfo, DatabaseInfo, ForeignKeyColumnInfo, TableInfo } from '../../../interfaces/payloads';

@Component({
  selector: 'app-sql-schema',
  templateUrl: './sql-schema.component.html',
  styleUrls: ['./sql-schema.component.css']
})
export class SqlSchemaComponent implements OnInit {

  constructor(private backendService: BackendService) { }

  schema: Schema = this.emptySchema();

  ngOnInit(): void {
    this.backendService.getPostgresSchema().subscribe(
      payload => {this.schema = this.toDisplayableSchema(payload.databaseInfo)}
    )
  }
  
  toDisplayableSchema(databaseInfo: DatabaseInfo): Schema {
    return {
      tables: databaseInfo.tables.map(this.toDisplayableTable)
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

  emptySchema(): Schema {
    return {tables: []};
  }

}

interface Schema {
  tables: Array<Table>
}

interface Table {
  columns: Array<Column>
  name: String
}

interface Column {
  name: String
  type: String
  foreignKey: String | null
}
