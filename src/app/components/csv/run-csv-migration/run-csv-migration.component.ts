import { Component, Input, OnInit } from '@angular/core';
import { CsvSchemaMapping } from 'src/app/interfaces/mapping-schemas';
import { Neo4jConnectionParams } from 'src/app/interfaces/payloads';
import BackendService from 'src/app/services/backend/backend.service';

@Component({
  selector: 'app-run-csv-migration',
  templateUrl: './run-csv-migration.component.html',
  styleUrls: ['./run-csv-migration.component.css']
})
export class RunCsvMigrationComponent implements OnInit {

  constructor(private backend: BackendService) { }

  ngOnInit(): void {
  }

  host = ""
  username = ""
  password = ""

  @Input() csvFileUrl: String = "file:///";
  @Input() withHeaders: boolean = false;
  @Input() csvSchemaMapping: CsvSchemaMapping | null = null


  onRunMigrationClick(){
    this.backend.runCsvMigration(
      this.csvFileUrl,
      this.withHeaders,
      this.getNeo4jConnectionParams(),
      <CsvSchemaMapping>this.csvSchemaMapping
    )
  }

  getNeo4jConnectionParams(): Neo4jConnectionParams {
    return {
      host: this.host,
      user: this.username,
      password: this.password
    }
  }

}
