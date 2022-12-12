import { Component, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Updateable } from 'src/app/interfaces/components';
import { CsvEdgeMapping, CsvNodeMapping, CsvSchemaMapping, SqlNodeMapping } from 'src/app/interfaces/mapping-schemas';
import { CsvMappingToGraphService } from 'src/app/services/csv-mapping-to-graph/csv-mapping-to-graph.service';
import { GraphVisualizationService } from 'src/app/services/graph-visualization/graph-visualization.service';
import { generateJsonUri } from 'src/app/utils';
import { CsvEdgeMappingComponent } from '../csv-edge-mapping/csv-edge-mapping.component';
import { CsvNodeMappingComponent } from '../csv-node-mapping/csv-node-mapping.component';

@Component({
  selector: 'app-migrate-from-csv',
  templateUrl: './migrate-from-csv.component.html',
  styleUrls: ['./migrate-from-csv.component.css']
})
export class MigrateFromCsvComponent implements OnInit, Updateable {

  constructor(
    private csvMappingToGraph: CsvMappingToGraphService,
    private graphVisualization: GraphVisualizationService
    ) { }
  
  onUpdate(){
    this.schemaMapping = this.getCsvSchemaMapping()
    console.log(this.schemaMapping)
    this.mappingsJsonUri = generateJsonUri(this.schemaMapping)
    const graph = this.csvMappingToGraph.convert(this.schemaMapping)
    this.graphInDotFormat.next(this.graphVisualization.toDotFormat(graph))
  }

  getCsvSchemaMapping(): CsvSchemaMapping {
    return {
      fromNode: this.fromNodeMapping,
      toNode: this.toNodeMapping,
      edge: this.edgeMapping
    }
  }
  
  csvFileSelected = false

  csvFileUrl = "file:///"
  withHeaders = false

  graphInDotFormat: Subject<String> = new Subject<String>();

  fromNodeMapping: CsvNodeMapping = {
    nodeLabel: "",
    mappedColumns: new Map()
  }

  toNodeMapping: CsvNodeMapping = {
    nodeLabel: "",
    mappedColumns: new Map()
  }

  edgeMapping: CsvEdgeMapping = {
    edgeLabel: "",
    mappedColumns: new Map()
  }
  schemaMapping: CsvSchemaMapping =  this.getCsvSchemaMapping();

  mappingsJsonUri = "data:application/json;charset=UTF-8," + encodeURIComponent(JSON.stringify(this.schemaMapping))

  onNodeMappingUpdatedEvent(event: any){
    const component = event as CsvNodeMappingComponent
    if (component.hasValidInput())
      if (component.isFromMapping)
        this.fromNodeMapping = component.getMapping()
      else
        this.toNodeMapping = component.getMapping()
    this.onUpdate()
  }

  onEdgeMappingUpdatedEvent(event: any){
    const component = event as CsvEdgeMappingComponent
    this.edgeMapping = component.getMapping()
    console.log(this.edgeMapping)
    this.onUpdate()
  }

  onCsvFileSelected(event: any): void{
    this.csvFileUrl = event as string
    this.csvFileSelected = true
  }

  onWithHeaders(event: any): void{
    this.withHeaders = event as boolean
  }

  ngOnInit(): void {
  }

}
