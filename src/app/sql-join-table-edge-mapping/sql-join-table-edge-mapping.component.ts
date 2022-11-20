import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ColumnMappingComponent } from '../column-mapping/column-mapping.component';

@Component({
  selector: 'app-sql-join-table-edge-mapping',
  templateUrl: './sql-join-table-edge-mapping.component.html',
  styleUrls: ['./sql-join-table-edge-mapping.component.css']
})
export class SqlJoinTableEdgeMappingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

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

    this.onUpdate();
  }
  onColumnMappingUpdatedEvent(event: any){
    let columnMappingComponent = event as ColumnMappingComponent
    console.log(columnMappingComponent);
    // TODO zapisuj mapping w mapie mappingId -> ["kolumna", "neo4jproperty"]

    this.onUpdate();
  }
  addColumnMapping(){
    this.highestColumnMappingId++;
    this.columnMappingIds.push(this.highestColumnMappingId);
  }
}
