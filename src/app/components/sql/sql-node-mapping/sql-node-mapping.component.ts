import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { AppComponent } from '../../../app.component';
import { ColumnMappingComponent } from '../../common/column-mapping/column-mapping.component';
import { SqlNodeMapping } from '../../../interfaces/mapping-schemas';
import { getMappedColumns } from '../../../utils';


@Component({
  selector: 'app-sql-node-mapping',
  templateUrl: './sql-node-mapping.component.html',
  styleUrls: ['./sql-node-mapping.component.css']
})
export class SqlNodeMappingComponent implements OnInit {

  nodeLabel = ""
  sqlTableName = ""

  columnMappingIds: Array<number> = [0]
  highestColumnMappingId = 0;

  @Input() nodeMappingId = 0;

  columnMappingComponents: Map<number, ColumnMappingComponent> = new Map();

  constructor() { }

  ngOnInit(): void {
  }

  @Output() nodeMappingUpdatedEvent = new EventEmitter<SqlNodeMappingComponent>();
  @Output() nodeMappingDeletedEvent = new EventEmitter<SqlNodeMappingComponent>();

  onUpdate() {
    this.nodeMappingUpdatedEvent.emit(this);
  }

  onDelete() {
    this.nodeMappingDeletedEvent.emit(this);
  }

  onColumnMappingDeletedEvent(event: any){
    let columnMappingComponent = event as ColumnMappingComponent
    let columnMappingId = columnMappingComponent.mappingId
    const index = this.columnMappingIds.indexOf(columnMappingId);
    
    if (index > -1){
      this.columnMappingIds.splice(index, 1);
    }

    this.columnMappingComponents.delete(columnMappingId)
    this.onUpdate();
  }
  onColumnMappingUpdatedEvent(event: any){
    let columnMappingComponent = event as ColumnMappingComponent
    this.columnMappingComponents.set(columnMappingComponent.mappingId, columnMappingComponent)
    this.onUpdate();
  }
  addColumnMapping(){
    this.highestColumnMappingId++;
    this.columnMappingIds.push(this.highestColumnMappingId);
    this.onUpdate();
  }

  getSqlNodeMapping(): SqlNodeMapping {
    return {
      "mappedColumns": getMappedColumns(this.columnMappingComponents),
      "nodeLabel": this.nodeLabel,
      "sqlTableName": this.sqlTableName
    }
  }
}