import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MappingComponent } from 'src/app/interfaces/components';
import { ValidationService } from 'src/app/services/validation/validation.service';
import { ForeignKeyEdgeMapping } from '../../../interfaces/mapping-schemas';

@Component({
  selector: 'app-sql-foreign-key-edge-mapping',
  templateUrl: './sql-foreign-key-edge-mapping.component.html',
  styleUrls: ['./sql-foreign-key-edge-mapping.component.css']
})
export class SqlForeignKeyEdgeMappingComponent implements OnInit, MappingComponent {

  constructor(private validationService: ValidationService) { }

  hasValidInput(): boolean {
    return this.isValid(this.edgeLabel)
        && this.isValid(this.foreignKeyTable)
        && this.isValid(this.fromTable)
        && this.isValid(this.toTable)
  }

  isValid(input: string): boolean {
    return this.validationService.isOneWordBeginningWithLetter(input)
  }

  ngOnInit(): void {
  }

  edgeLabel = ""
  foreignKeyTable = ""
  fromTable = ""
  toTable = ""

  @Input() mappingId = 0;

  @Output() foreignKeyEdgeMappingDeletedEvent = new EventEmitter<SqlForeignKeyEdgeMappingComponent>();

  @Output() foreignKeyEdgeMappingUpdatedEvent = new EventEmitter<SqlForeignKeyEdgeMappingComponent>();
  
  onUpdate(){
    this.foreignKeyEdgeMappingUpdatedEvent.emit(this);
  }
  
  onDelete() {
    this.foreignKeyEdgeMappingDeletedEvent.emit(this);
  }

  getMapping(): ForeignKeyEdgeMapping {
    return {
      "foreignKeyTable": this.foreignKeyTable,
      "edgeLabel": this.edgeLabel,
      "from": this.fromTable,
      "to": this.toTable
    }
  }
}
