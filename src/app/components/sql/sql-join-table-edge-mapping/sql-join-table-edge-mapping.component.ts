import { Component, Input, Output, EventEmitter, OnInit, getModuleFactory } from '@angular/core';
import { ColumnMappingComponent } from '../../../components/common/column-mapping/column-mapping.component';
import { JoinTableEdgeMapping, SqlEdgeMapping } from '../../../interfaces/mapping-schemas';
import { getMappedColumns } from '../../../utils';

@Component({
  selector: 'app-sql-join-table-edge-mapping',
  templateUrl: './sql-join-table-edge-mapping.component.html',
  styleUrls: ['./sql-join-table-edge-mapping.component.css']
})
export class SqlJoinTableEdgeMappingComponent implements OnInit {

  joinTable = ""
  edgeLabel = ""
  fromTable = ""
  toTable = ""

  constructor() { }

  ngOnInit(): void {
  }

  columnMappingComponents: Map<number, ColumnMappingComponent> = new Map();

  @Input() joinTableEdgeMappingId = 0;

  @Output() joinTableEdgeMappingDeletedEvent = new EventEmitter<SqlJoinTableEdgeMappingComponent>();

  @Output() joinTableEdgeMappingUpdatedEvent = new EventEmitter<SqlJoinTableEdgeMappingComponent>();
  
  onDelete() {
    this.joinTableEdgeMappingDeletedEvent.emit(this);
  }

  onUpdate() {
    this.joinTableEdgeMappingUpdatedEvent.emit(this);
  }
  
  columnMappingIds: Array<number> = [0]
  highestColumnMappingId = 0;
  
  onColumnMappingDeletedEvent(event: any){
    let columnMappingComponent = event as ColumnMappingComponent
    const index = this.columnMappingIds.indexOf(columnMappingComponent.mappingId);
    
    if (index > -1){
      this.columnMappingIds.splice(index, 1);
    }
    this.columnMappingComponents.delete(columnMappingComponent.mappingId)

    this.onUpdate();
  }
  onColumnMappingUpdatedEvent(event: any){
    let columnMappingComponent = event as ColumnMappingComponent
    console.log(columnMappingComponent);
    this.columnMappingComponents.set(columnMappingComponent.mappingId, columnMappingComponent)
    this.onUpdate();
  }
  addColumnMapping(){
    this.highestColumnMappingId++;
    this.columnMappingIds.push(this.highestColumnMappingId);
    this.onUpdate()
  }

  getJoinTableEdgeMapping(): JoinTableEdgeMapping{
    return {
      "edgeLabel": this.edgeLabel,
      "from": this.fromTable,
      "joinTable": this.joinTable,
      "mappedColumns": getMappedColumns(this.columnMappingComponents),
      "to": this.toTable
    };
  }
}
