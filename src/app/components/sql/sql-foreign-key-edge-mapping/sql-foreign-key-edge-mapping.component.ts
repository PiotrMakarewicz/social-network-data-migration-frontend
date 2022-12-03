import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ForeignKeyEdgeMapping } from '../../../interfaces/mapping-schemas';

@Component({
  selector: 'app-sql-foreign-key-edge-mapping',
  templateUrl: './sql-foreign-key-edge-mapping.component.html',
  styleUrls: ['./sql-foreign-key-edge-mapping.component.css']
})
export class SqlForeignKeyEdgeMappingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  edgeLabel = ""
  foreignKeyTable = ""
  fromTable = ""
  toTable = ""

  @Input() foreignKeyEdgeMappingId = 0;

  @Output() foreignKeyEdgeMappingDeletedEvent = new EventEmitter<SqlForeignKeyEdgeMappingComponent>();

  @Output() foreignKeyEdgeMappingUpdatedEvent = new EventEmitter<SqlForeignKeyEdgeMappingComponent>();
  
  onUpdate(){
    this.foreignKeyEdgeMappingUpdatedEvent.emit(this);
  }
  
  onDelete() {
    this.foreignKeyEdgeMappingDeletedEvent.emit(this);
  }

  getForeignKeyEdgeMapping(): ForeignKeyEdgeMapping {
    return {
      "foreignKeyTable": this.foreignKeyTable,
      "edgeLabel": this.edgeLabel,
      "from": this.fromTable,
      "to": this.toTable
    }
  }
}
