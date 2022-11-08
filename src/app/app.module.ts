import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MigrateFromSqlComponent } from './migrate-from-sql/migrate-from-sql.component';
import { MigrateFromCsvComponent } from './migrate-from-csv/migrate-from-csv.component';
import { GraphAnalyticsComponent } from './graph-analytics/graph-analytics.component';
import { SqlSchemaComponent } from './sql-schema/sql-schema.component';
import { SqlNodeMappingComponent } from './sql-node-mapping/sql-node-mapping.component';
import { SqlEdgeMappingComponent } from './sql-edge-mapping/sql-edge-mapping.component';
import { ColumnMappingComponent } from './column-mapping/column-mapping.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MigrateFromSqlComponent,
    MigrateFromCsvComponent,
    GraphAnalyticsComponent,
    SqlSchemaComponent,
    SqlNodeMappingComponent,
    SqlEdgeMappingComponent,
    ColumnMappingComponent
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
