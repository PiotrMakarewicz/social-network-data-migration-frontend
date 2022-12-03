import { Component, OnInit } from '@angular/core';
import { never } from 'rxjs';
import { GraphVisualizationService } from 'src/app/services/graph-visualization/graph-visualization.service';
import { SqlMappingToGraphService } from 'src/app/services/sql-mapping-to-graph/sql-mapping-to-graph.service';
import { SqlEdgeMapping, SqlNodeMapping, SqlSchemaMapping } from '../../../interfaces/mapping-schemas';
import { SqlForeignKeyEdgeMappingComponent } from '../sql-foreign-key-edge-mapping/sql-foreign-key-edge-mapping.component';
import { SqlJoinTableEdgeMappingComponent } from '../sql-join-table-edge-mapping/sql-join-table-edge-mapping.component';
import { SqlNodeMappingComponent } from '../sql-node-mapping/sql-node-mapping.component';

@Component({
  selector: 'app-migrate-from-sql',
  templateUrl: './migrate-from-sql.component.html',
  styleUrls: ['./migrate-from-sql.component.css']
})
export class MigrateFromSqlComponent implements OnInit {
  graphInDotFormat: string = "digraph {}";

  constructor(
    private sqlMappingToGraph: SqlMappingToGraphService,
    private graphVisualization: GraphVisualizationService
  ){}

  nodeMappingIds: Array<number> = [0]
  highestNodeMappingId = 0;

  foreignKeyEdgeMappingIds: Array<number> = [0]
  highestForeignKeyEdgeMappingId = 0;

  joinTableEdgeMappingIds: Array<number> = [1024] // raczej nie chcemy kolizji w idkach edge mappingów, bo chcemy je zapisać w jednej mapie by je potem prosto serializować
  highestJoinTableEdgeMappingId = 1024;

  mappingsJsonUri = "data:application/json;charset=UTF-8," + encodeURIComponent(JSON.stringify({
    "nodes": [],
    "edges": []
  }))

  nodeMappings: Map<number, SqlNodeMapping> = new Map<number, SqlNodeMapping>([]);
  edgeMappings: Map<number, SqlEdgeMapping> = new Map<number, SqlEdgeMapping>([]);

  ngOnInit(): void {
  }


  addNodeMapping(){
    this.highestNodeMappingId++;
    this.nodeMappingIds.push(this.highestNodeMappingId);
    this.onUpdate();
  };

  onNodeMappingDeletedEvent(event: any){
    let component = event as SqlNodeMappingComponent
    const index = this.nodeMappingIds.indexOf(component.nodeMappingId);
    
    if (index > -1){
      this.nodeMappingIds.splice(index, 1);
    }
    this.onUpdate();
  }

  onNodeMappingUpdatedEvent(event: any){
    let component = event as SqlNodeMappingComponent
    this.nodeMappings.set(component.nodeMappingId, component.getSqlNodeMapping())
    this.onUpdate();
  }


  addJoinTableEdgeMapping(){
    this.highestJoinTableEdgeMappingId++;
    this.joinTableEdgeMappingIds.push(this.highestJoinTableEdgeMappingId);
    this.onUpdate();
  };

  onJoinTableEdgeMappingDeletedEvent(event: any){
    let component = event as SqlJoinTableEdgeMappingComponent
    const index = this.joinTableEdgeMappingIds.indexOf(component.joinTableEdgeMappingId);
    
    if (index > -1){
      this.joinTableEdgeMappingIds.splice(index, 1);
    }
    this.edgeMappings.delete(component.joinTableEdgeMappingId)

    this.onUpdate();
  }

  onJoinTableEdgeMappingUpdatedEvent(event: any){
    let component = event as SqlJoinTableEdgeMappingComponent
    this.edgeMappings.set(component.joinTableEdgeMappingId, component.getJoinTableEdgeMapping())
    this.onUpdate();
  }


  addForeignKeyEdgeMapping(){
    this.highestForeignKeyEdgeMappingId++;
    this.foreignKeyEdgeMappingIds.push(this.highestForeignKeyEdgeMappingId);
    this.onUpdate();
  };


  onForeignKeyEdgeMappingUpdatedEvent(event: any){
    let component = event as SqlForeignKeyEdgeMappingComponent
    this.edgeMappings.set(component.foreignKeyEdgeMappingId, component.getForeignKeyEdgeMapping())
    this.onUpdate();
  }

  onForeignKeyEdgeMappingDeletedEvent(event: any){
    console.log(event)
    let component = event as SqlForeignKeyEdgeMappingComponent
    const index = this.foreignKeyEdgeMappingIds.indexOf(component.foreignKeyEdgeMappingId);
    
    if (index > -1){
      this.foreignKeyEdgeMappingIds.splice(index, 1);
    }
    this.onUpdate();
  }

  onUpdate(){
    this.mappingsJsonUri = this.generateMappingsJsonUri();
    console.log(this.mappingsJsonUri);
    const graph = this.sqlMappingToGraph.convert(this.getSqlSchemaMapping())
    this.graphInDotFormat = this.graphVisualization.toDotFormat(graph)
  }

  getSqlSchemaMapping(): SqlSchemaMapping {
    console.log(this.nodeMappings);
    return {
      "nodes": Array.from(this.nodeMappings.values()),
      "edges": Array.from(this.edgeMappings.values())
    }
  }

  jsonReplacer(_: any, value: any) {
    if (value instanceof Map) 
      return Object.fromEntries(value.entries())
    else 
      return value;
  }

  generateMappingsJsonUri() {
    const sqlSchemaMapping = this.getSqlSchemaMapping();
    const jsonStr = JSON.stringify(sqlSchemaMapping, this.jsonReplacer);
    return "data:application/json;charset=UTF-8," + encodeURIComponent(jsonStr);
  }
}
