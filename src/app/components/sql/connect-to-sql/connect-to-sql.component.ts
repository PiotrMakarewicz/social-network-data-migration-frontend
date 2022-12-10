import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { DatabaseInfo, PostgreSchemaResponsePayload } from 'src/app/interfaces/payloads';
import BackendService from 'src/app/services/backend/backend.service';
import { ConnectionsManagerService } from 'src/app/services/connections-manager/connections-manager.service';

@Component({
  selector: 'app-connect-to-sql',
  templateUrl: './connect-to-sql.component.html',
  styleUrls: ['./connect-to-sql.component.css']
})
export class ConnectToSqlComponent implements OnInit {
  host = ""
  port = 5432
  username = ""
  password = ""
  dbname = ""

  @Output() postgreSchemaEvent = new EventEmitter<DatabaseInfo>()

  constructor(
    private backendService: BackendService,
    private connectionsManagerService: ConnectionsManagerService
    ) { }

  ngOnInit(): void {
  }

  onConnectClick(): void {
    const connParams = {
      host: `${this.host}:${this.port}`,
      dbname: this.dbname,
      user: this.username,
      password: this.password
    }
    const subscription = this.backendService.getPostgresSchema(connParams)
    .pipe<PostgreSchemaResponsePayload>(
      catchError(
        err => {
          alert("Failed to connect to PostgreSQL DB")
          return throwError(() => err)
        }
      )
    )
    .subscribe(
      (payload: PostgreSchemaResponsePayload) => {
        this.postgreSchemaEvent.emit(payload.databaseInfo)
        this.connectionsManagerService.setPostgreConnectionParams(connParams)
        subscription.unsubscribe()
      }
    )
  }
}
