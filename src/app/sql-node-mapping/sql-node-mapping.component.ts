import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { ColumnMappingComponent } from '../column-mapping/column-mapping.component';

@Component({
  selector: 'app-sql-node-mapping',
  templateUrl: './sql-node-mapping.component.html',
  styleUrls: ['./sql-node-mapping.component.css']
})
export class SqlNodeMappingComponent implements OnInit {

  columnMappingIds: Array<number> = [0]
  highestColumnMappingId = 0;

  @Input() nodeMappingId = 0;

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
