import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MigrateFromSqlComponent } from './components/sql/migrate-from-sql/migrate-from-sql.component';
import { MigrateFromCsvComponent } from './components/csv/migrate-from-csv/migrate-from-csv.component';
import { MigrationStatusComponent } from './components/migration-status/migration-status.component';

const routes: Routes = [
  { path: 'migrate-from-sql', component: MigrateFromSqlComponent},
  { path: 'migrate-from-csv', component: MigrateFromCsvComponent},
  { path: 'migration-status', component: MigrationStatusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
