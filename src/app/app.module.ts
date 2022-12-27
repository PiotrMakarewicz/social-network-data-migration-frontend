import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MigrateFromSqlComponent } from './components/sql/migrate-from-sql/migrate-from-sql.component';
import { MigrateFromCsvComponent } from './components/csv/migrate-from-csv/migrate-from-csv.component';
import { SqlSchemaComponent } from './components/sql/sql-schema/sql-schema.component';
import { SqlNodeMappingComponent } from './components/sql/sql-node-mapping/sql-node-mapping.component';
import { ColumnMappingComponent } from './components/common/column-mapping/column-mapping.component';
import { FormsModule } from '@angular/forms';
import { SqlJoinTableEdgeMappingComponent } from './components/sql/sql-join-table-edge-mapping/sql-join-table-edge-mapping.component';
import { SqlForeignKeyEdgeMappingComponent } from './components/sql/sql-foreign-key-edge-mapping/sql-foreign-key-edge-mapping.component';
import { GraphVisualizationComponent } from './components/common/graph-visualization/graph-visualization.component';
import { ConnectToSqlComponent } from './components/sql/connect-to-sql/connect-to-sql.component';
import { RunSqlMigrationComponent } from './components/sql/run-sql-migration/run-sql-migration.component';
import { SelectCsvFileComponent } from './components/csv/select-csv-file/select-csv-file.component';
import { RunCsvMigrationComponent } from './components/csv/run-csv-migration/run-csv-migration.component';
import { CsvNodeMappingComponent } from './components/csv/csv-node-mapping/csv-node-mapping.component';
import { CsvEdgeMappingComponent } from './components/csv/csv-edge-mapping/csv-edge-mapping.component';
import { MigrationStatusComponent } from './components/migration-status/migration-status.component';
import { SingleMigrationStatusComponent } from './components/single-migration-status/single-migration-status.component';

@NgModule({
  declarations: [
    AppComponent,
    MigrateFromSqlComponent,
    MigrateFromCsvComponent,
    SqlSchemaComponent,
    SqlNodeMappingComponent,
    ColumnMappingComponent,
    SqlJoinTableEdgeMappingComponent,
    SqlForeignKeyEdgeMappingComponent,
    GraphVisualizationComponent,
    ConnectToSqlComponent,
    RunSqlMigrationComponent,
    SelectCsvFileComponent,
    RunCsvMigrationComponent,
    CsvNodeMappingComponent,
    CsvEdgeMappingComponent,
    MigrationStatusComponent,
    SingleMigrationStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
