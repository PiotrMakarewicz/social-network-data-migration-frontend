import { Component, EventEmitter, OnInit } from '@angular/core';
import { Output, Input } from '@angular/core';
import { MappingComponent } from 'src/app/interfaces/components';
import { Mapping } from 'src/app/interfaces/mapping-schemas';
import { ValidationService } from 'src/app/services/validation/validation.service';

@Component({
  selector: 'app-column-mapping',
  templateUrl: './column-mapping.component.html',
  styleUrls: ['./column-mapping.component.css']
})
export class ColumnMappingComponent implements OnInit, MappingComponent, Mapping {
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

  isValid(input: String): boolean {
    return this.validationService.isOneWordBeginningWithLetter(input)
  }

  isNonEmpty(input: String): boolean {
    return input.length > 0
  }

  hasValidInput(): boolean {
    return this.isNonEmpty(this.sqlColumn) && this.isValid(this.neo4jProperty)
  }

  getMapping(): Mapping {
    return this
  }

  constructor(private validationService: ValidationService) { }

  ngOnInit(): void {
  }

}
