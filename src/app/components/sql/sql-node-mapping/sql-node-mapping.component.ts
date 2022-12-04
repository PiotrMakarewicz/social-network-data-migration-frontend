import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { AppComponent } from '../../../app.component';
import { ColumnMappingComponent } from '../../common/column-mapping/column-mapping.component';
import { SqlNodeMapping } from '../../../interfaces/mapping-schemas';
import { addMappingIdAndUpdate, getMappedColumns, removeMappingIdAndUpdate, saveMappingIfValidAndUpdate } from '../../../utils';
import { ValidationService } from 'src/app/services/validation/validation.service';
import { MappingComponent } from 'src/app/interfaces/components';


@Component({
  selector: 'app-sql-node-mapping',
  templateUrl: './sql-node-mapping.component.html',
  styleUrls: ['./sql-node-mapping.component.css']
})
export class SqlNodeMappingComponent implements OnInit, MappingComponent {

  nodeLabel = ""
  sqlTableName = ""

  columnMappingIds: Array<number> = [0]
  highestColumnMappingId = 0;

  @Input() mappingId = 0;

  columnMappingComponents: Map<number, ColumnMappingComponent> = new Map();

  constructor(private validationService: ValidationService) {}

  isValid(input: String): boolean {
    return this.validationService.isOneWordBeginningWithLetter(input)
  }

  hasValidInput(){
    return this.isValid(this.nodeLabel) && this.isValid(this.sqlTableName)
  }

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
    let id = (event as ColumnMappingComponent).mappingId
    removeMappingIdAndUpdate(this.columnMappingIds, id, this)
    this.columnMappingComponents.delete(id)
    this.onUpdate();
  }

  onColumnMappingUpdatedEvent(event: any){
    let component = event as ColumnMappingComponent
    saveMappingIfValidAndUpdate(this.columnMappingComponents, component, this)
  }
  
  addColumnMapping(){
    const id = ++(this.highestColumnMappingId)
    addMappingIdAndUpdate(this.columnMappingIds, id, this)
  }

  getMapping(): SqlNodeMapping {
    return {
      "mappedColumns": getMappedColumns(this.columnMappingComponents),
      "nodeLabel": this.nodeLabel,
      "sqlTableName": this.sqlTableName
    }
  }
}
