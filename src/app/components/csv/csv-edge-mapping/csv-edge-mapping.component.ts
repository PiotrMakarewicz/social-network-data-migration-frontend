import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Updateable } from 'src/app/interfaces/components';
import { CsvEdgeMapping, Mapping } from 'src/app/interfaces/mapping-schemas';
import { ValidationService } from 'src/app/services/validation/validation.service';
import { addMappingIdAndUpdate, getMappedColumns, removeMappingIdAndUpdate, saveMappingIfValidAndUpdate } from 'src/app/utils';
import { ColumnMappingComponent } from '../../common/column-mapping/column-mapping.component';

@Component({
  selector: 'app-csv-edge-mapping',
  templateUrl: './csv-edge-mapping.component.html',
  styleUrls: ['./csv-edge-mapping.component.css']
})
export class CsvEdgeMappingComponent implements OnInit, Mapping, Updateable {

  edgeLabel = ""
  columnMappingIds: Array<number> = [];
  columnMappingComponents: Map<number, ColumnMappingComponent> = new Map();
  highestColumnMappingId = 0;

  constructor(private validationService: ValidationService) { }

  @Input() withHeaders = false

  ngOnInit(): void {
  }
  getMapping(): CsvEdgeMapping {
    return {
      edgeLabel: this.edgeLabel,
      mappedColumns: getMappedColumns(this.columnMappingComponents)
    }
  }


  isValid(input: String): boolean {
    return this.validationService.isOneWordBeginningWithLetter(input)
  }

  hasValidInput(){
    return this.isValid(this.edgeLabel) 
  }

  @Output() edgeMappingUpdatedEvent = new EventEmitter<CsvEdgeMappingComponent>();

  onUpdate() {
    this.edgeMappingUpdatedEvent.emit(this);
  }

  onColumnMappingDeletedEvent(event: any){
    console.log(event)
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
}
