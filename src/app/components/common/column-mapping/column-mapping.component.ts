import { Component, EventEmitter, OnInit } from '@angular/core';
import { Output, Input } from '@angular/core';

@Component({
  selector: 'app-column-mapping',
  templateUrl: './column-mapping.component.html',
  styleUrls: ['./column-mapping.component.css']
})
export class ColumnMappingComponent implements OnInit {
  sqlColumn = ""
  neo4jProperty = ""
  @Input() mappingId = 0;
  
  @Output() columnMappingUpdatedEvent = new EventEmitter<ColumnMappingComponent>();
  @Output() columnMappingDeletedEvent = new EventEmitter<ColumnMappingComponent>();

  onUpdate() {
    this.columnMappingUpdatedEvent.emit(this);
  }

  onDelete() {
    this.columnMappingDeletedEvent.emit(this);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
