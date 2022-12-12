import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MappingComponent, Updateable } from 'src/app/interfaces/components';
import { CsvNodeMapping, Mapping } from 'src/app/interfaces/mapping-schemas';
import { ValidationService } from 'src/app/services/validation/validation.service';
import { addMappingIdAndUpdate, removeMappingIdAndUpdate, saveMappingIfValidAndUpdate } from 'src/app/utils';
import { ColumnMappingComponent } from '../../common/column-mapping/column-mapping.component';
import { getMappedColumns } from '../../../utils';

@Component({
  selector: 'app-csv-node-mapping',
  templateUrl: './csv-node-mapping.component.html',
  styleUrls: ['./csv-node-mapping.component.css']
})
export class CsvNodeMappingComponent implements OnInit, Updateable {
  columnMappingComponents: Map<number, ColumnMappingComponent> = new Map();
  highestColumnMappingId: number = 0;

  constructor(private validationService: ValidationService) { }

  columnMappingIds: Array<number> = []

  @Input() isFromMapping: boolean = true;
  nodeLabel = ""

  @Input() withHeaders = false


  getMapping(): CsvNodeMapping {
    return {
      nodeLabel: this.nodeLabel,
      mappedColumns: getMappedColumns(this.columnMappingComponents)
    };
  }

  ngOnInit(): void {
  }

  isValid(input: String): boolean {
    return this.validationService.isOneWordBeginningWithLetter(input)
  }

  hasValidInput(){
    return this.isValid(this.nodeLabel) && this.columnMappingIds.length > 0
  }

  @Output() nodeMappingUpdatedEvent = new EventEmitter<CsvNodeMappingComponent>();

  onUpdate() {
    this.nodeMappingUpdatedEvent.emit(this);
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

