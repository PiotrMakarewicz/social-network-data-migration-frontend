import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MigrateFromSqlComponent } from './migrate-from-sql/migrate-from-sql.component';
import { MigrateFromCsvComponent } from './migrate-from-csv/migrate-from-csv.component';
import { GraphAnalyticsComponent } from './graph-analytics/graph-analytics.component';

const routes: Routes = [
  { path: 'migrate-from-sql', component: MigrateFromSqlComponent},
  { path: 'migrate-from-csv', component: MigrateFromCsvComponent},
  { path: 'graph-analytics', component: GraphAnalyticsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
