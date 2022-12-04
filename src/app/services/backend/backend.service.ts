import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostgreSchemaResponsePayload } from '../../interfaces/payloads';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private postgreSchemaEndpoint = "/postgre_schema"

  constructor(private http: HttpClient) {}

  getPostgresSchema(): Observable<PostgreSchemaResponsePayload> {
    return this.http.post<PostgreSchemaResponsePayload>(
      this.postgreSchemaEndpoint,
      {"host":"localhost", "dbname":"socialdata", "user": "sna_user", "password":"password"},
    );
  }
}
