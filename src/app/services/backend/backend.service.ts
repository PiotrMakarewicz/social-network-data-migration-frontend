import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CsvSchemaMapping, SqlSchemaMapping } from 'src/app/interfaces/mapping-schemas';
import { jsonReplacer } from 'src/app/utils';
import { PostgreConnectionParams, PostgreSchemaResponsePayload, Neo4jConnectionParams } from '../../interfaces/payloads';

@Injectable({
  providedIn: 'root'
})
export default class BackendService {

  constructor(private http: HttpClient) {}

  getPostgresSchema(connParams: PostgreConnectionParams): Observable<PostgreSchemaResponsePayload> {
    return this.http.post<PostgreSchemaResponsePayload>(
      "/postgre_schema",
      connParams
    );
  }

  runSqlMigration(
    postgreConnParams: PostgreConnectionParams,
    neo4jConnParams: Neo4jConnectionParams,
    sqlSchemaMapping: SqlSchemaMapping
    ) {
    return this.http.post<String>(
      "migration/postgre",
      {
        postgreConnectionParams: postgreConnParams,
        neo4jConnectionParams: neo4jConnParams,
        rawSchemaMapping: JSON.stringify(sqlSchemaMapping, jsonReplacer)
      }
    )
  }

  runCsvMigration(
    csvFileUrl: String,
    withHeaders: boolean,
    neo4jConnectionParams: Neo4jConnectionParams,
    csvSchemaMapping: CsvSchemaMapping
  ) {
    return this.http.post<String>(
      "migration/csv",
      {
        csvFileUrl: csvFileUrl,
        withHeaders: withHeaders,
        neo4jConnectionParams: neo4jConnectionParams,
        rawSchemaMapping:  JSON.stringify(csvSchemaMapping, jsonReplacer)
      }
    )
  }

}
