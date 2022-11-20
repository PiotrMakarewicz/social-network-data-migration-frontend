import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sql-foreign-key-edge-mapping',
  templateUrl: './sql-foreign-key-edge-mapping.component.html',
  styleUrls: ['./sql-foreign-key-edge-mapping.component.css']
})
export class SqlForeignKeyEdgeMappingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() foreignKeyEdgeMappingId = 0;

  @Output() foreignKeyEdgeMappingDeletedEvent = new EventEmitter<SqlForeignKeyEdgeMappingComponent>();

  @Output() foreignKeyEdgeMappingUpdatedEvent = new EventEmitter<SqlForeignKeyEdgeMappingComponent>();
  onDelete() {
    this.foreignKeyEdgeMappingDeletedEvent.emit(this);
  }
}
