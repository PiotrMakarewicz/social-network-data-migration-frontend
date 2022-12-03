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
    GraphVisualizationComponent
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
