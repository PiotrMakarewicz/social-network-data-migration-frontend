import { Component, OnInit } from '@angular/core';
import { never } from 'rxjs';
import { MappingComponent, Updateable } from 'src/app/interfaces/components';
import { JoinTableEdgeMapping } from 'src/app/mapping-schemas';
import { addMappingIdAndUpdate, jsonReplacer, removeMappingIdAndUpdate, saveMappingIfValidAndUpdate } from 'src/app/utils';
import { SqlEdgeMapping, SqlNodeMapping, SqlSchemaMapping } from '../../../interfaces/mapping-schemas';
import { SqlForeignKeyEdgeMappingComponent } from '../sql-foreign-key-edge-mapping/sql-foreign-key-edge-mapping.component';
import { SqlJoinTableEdgeMappingComponent } from '../sql-join-table-edge-mapping/sql-join-table-edge-mapping.component';
import { SqlNodeMappingComponent } from '../sql-node-mapping/sql-node-mapping.component';

@Component({
  selector: 'app-migrate-from-sql',
  templateUrl: './migrate-from-sql.component.html',
  styleUrls: ['./migrate-from-sql.component.css']
})
export class MigrateFromSqlComponent implements OnInit, Updateable {

  mappingsJsonUri = "data:application/json;charset=UTF-8," + encodeURIComponent(JSON.stringify({
    "nodes": [],
    "edges": []
  }))

  nodeMappings: Map<number, SqlNodeMapping> = new Map<number, SqlNodeMapping>([]);
  edgeMappings: Map<number, SqlEdgeMapping> = new Map<number, SqlEdgeMapping>([]);

  ngOnInit(): void {}

  onUpdate(){
    this.mappingsJsonUri = this.generateMappingsJsonUri();
  }

  generateMappingsJsonUri() {
    const sqlSchemaMapping = this.getSqlSchemaMapping();
    const jsonStr = JSON.stringify(sqlSchemaMapping, jsonReplacer);
    return "data:application/json;charset=UTF-8," + encodeURIComponent(jsonStr);
  }

  getSqlSchemaMapping(): SqlSchemaMapping {
    return {
      "nodes": Array.from(this.nodeMappings.values()),
      "edges": Array.from(this.edgeMappings.values())
    }
  }

  // NODE MAPPINGS

  nodeMappingIds: Array<number> = []
  highestNodeMappingId = 0;

  addNodeMapping(){
    const id = this.highestNodeMappingId++;
    addMappingIdAndUpdate(this.nodeMappingIds, id, this)
  };

  onNodeMappingDeletedEvent(event: any){
    const id = (event as MappingComponent).mappingId
    removeMappingIdAndUpdate(this.nodeMappingIds, id, this)
  }

  onNodeMappingUpdatedEvent(event: any){
    let component = event as MappingComponent
    saveMappingIfValidAndUpdate<SqlNodeMapping>(this.nodeMappings, component, this)
  }

  // JOIN TABLE EDGE MAPPINGS

  joinTableEdgeMappingIds: Array<number> = [] // raczej nie chcemy kolizji w idkach edge mappingów, bo chcemy je zapisać w jednej mapie by je potem prosto serializować
  highestJoinTableEdgeMappingId = 1024;

  addJoinTableEdgeMapping(){
    const id = this.highestJoinTableEdgeMappingId++;
    addMappingIdAndUpdate(this.joinTableEdgeMappingIds, id, this)
  };

  onJoinTableEdgeMappingDeletedEvent(event: any){
    const id = (event as MappingComponent).mappingId
    removeMappingIdAndUpdate(this.joinTableEdgeMappingIds, id, this)
  }

  onJoinTableEdgeMappingUpdatedEvent(event: any){
    let component = event as MappingComponent
    saveMappingIfValidAndUpdate<SqlEdgeMapping>(this.edgeMappings, component, this)
  }

  // FOREIGN KEY MAPPINGS

  foreignKeyEdgeMappingIds: Array<number> = []
  highestForeignKeyEdgeMappingId = 0;

  addForeignKeyEdgeMapping(){
    const id = this.highestForeignKeyEdgeMappingId++;
    addMappingIdAndUpdate(this.foreignKeyEdgeMappingIds, id, this)
  };

  onForeignKeyEdgeMappingUpdatedEvent(event: any){
    let component = event as MappingComponent
    saveMappingIfValidAndUpdate<SqlEdgeMapping>(this.edgeMappings, component, this)
  }

  onForeignKeyEdgeMappingDeletedEvent(event: any){
    const id = (event as MappingComponent).mappingId
    removeMappingIdAndUpdate(this.foreignKeyEdgeMappingIds, id, this)
  }
}
