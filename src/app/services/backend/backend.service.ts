import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { PostgreConnectionParams, PostgreSchemaResponsePayload } from '../../interfaces/payloads';

@Injectable({
  providedIn: 'root'
})
export default class BackendService {

  private postgreSchemaEndpoint = "/postgre_schema"

  constructor(private http: HttpClient) {}

  getPostgresSchema(connParams: PostgreConnectionParams): Observable<PostgreSchemaResponsePayload> {
    return this.http.post<PostgreSchemaResponsePayload>(
      this.postgreSchemaEndpoint,
      connParams
    );
  }
}
