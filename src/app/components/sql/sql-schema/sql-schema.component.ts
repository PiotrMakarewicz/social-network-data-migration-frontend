import { Component, Input, OnInit } from '@angular/core';
import BackendService from '../../../services/backend/backend.service';
import { ColumnInfo, DatabaseInfo, ForeignKeyColumnInfo, TableInfo } from '../../../interfaces/payloads';
import { Schema } from 'src/app/interfaces/sql-displayable-schema';

@Component({
  selector: 'app-sql-schema',
  templateUrl: './sql-schema.component.html',
  styleUrls: ['./sql-schema.component.css']
})
export class SqlSchemaComponent implements OnInit {

  @Input() schema: Schema = {tables: []};

  ngOnInit(): void {

  }
}

