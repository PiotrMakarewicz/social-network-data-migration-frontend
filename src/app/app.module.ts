import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MigrateFromSqlComponent } from './migrate-from-sql/migrate-from-sql.component';
import { MigrateFromCsvComponent } from './migrate-from-csv/migrate-from-csv.component';
import { GraphAnalyticsComponent } from './graph-analytics/graph-analytics.component';

@NgModule({
  declarations: [
    AppComponent,
    MigrateFromSqlComponent,
    MigrateFromCsvComponent,
    GraphAnalyticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
