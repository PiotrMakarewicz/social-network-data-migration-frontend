import { Injectable } from '@angular/core';
import { Neo4jConnectionParams, PostgreConnectionParams } from 'src/app/interfaces/payloads';

@Injectable({
  providedIn: 'root'
})
export class ConnectionsManagerService {

  constructor() { }

  private postgreConnParams: PostgreConnectionParams | null = null
  // private neo4jConnParams: Neo4jConnectionParams | null = null

  setPostgreConnectionParams(postgreConnectionParams: PostgreConnectionParams) {
    this.postgreConnParams = postgreConnectionParams
  }

  getPostgreConnectionParams(): PostgreConnectionParams | null {
    return this.postgreConnParams
  }

  // setNeo4jConnectionParams(neo4jConnParams: Neo4jConnectionParams) {
  //   this.neo4jConnParams = neo4jConnParams
  // }

  // getNeo4jConnectionParams(): Neo4jConnectionParams | null {
  //   return this.neo4jConnParams
  // }


}
