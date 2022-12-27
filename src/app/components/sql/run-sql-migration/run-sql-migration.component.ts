import { Component, Input, OnInit } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { SqlSchemaMapping } from 'src/app/interfaces/mapping-schemas';
import { PostgreConnectionParams } from 'src/app/interfaces/payloads';
import BackendService from 'src/app/services/backend/backend.service';
import { ConnectionsManagerService } from 'src/app/services/connections-manager/connections-manager.service';

@Component({
  selector: 'app-run-sql-migration',
  templateUrl: './run-sql-migration.component.html',
  styleUrls: ['./run-sql-migration.component.css']
})
export class RunSqlMigrationComponent implements OnInit {

  host = ""
  username = ""
  password = ""

  @Input() schemaMapping: SqlSchemaMapping = {
    nodes: [],
    edges: []
  }

  constructor(private backendService: BackendService, private connectionsManagerService: ConnectionsManagerService) { }

  ngOnInit(): void {}

  onRunMigrationClick(): void {
    
    const subscription = this.backendService.runSqlMigration(
      <PostgreConnectionParams>this.connectionsManagerService.getPostgreConnectionParams(),
      {
        host: this.host,
        user: this.username,
        password: this.password
      },
      this.schemaMapping
    )
    .pipe<String>(
      catchError(
        err => {
          alert("Failed to start migration. Reason: " + err.message)
          return throwError(() => err)
        }
      )
    )
    .subscribe(
      (payload: String) => {
        alert("Migration with id: " + payload + " has started")
        subscription.unsubscribe()
      }
    )
  }

}
