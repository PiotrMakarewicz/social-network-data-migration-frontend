import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MigrateFromSqlComponent } from './migrate-from-sql/migrate-from-sql.component';
import { MigrateFromCsvComponent } from './migrate-from-csv/migrate-from-csv.component';
import { GraphAnalyticsComponent } from './graph-analytics/graph-analytics.component';
import { SqlSchemaComponent } from './sql-schema/sql-schema.component';

@NgModule({
  declarations: [
    AppComponent,
    MigrateFromSqlComponent,
    MigrateFromCsvComponent,
    GraphAnalyticsComponent,
    SqlSchemaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
