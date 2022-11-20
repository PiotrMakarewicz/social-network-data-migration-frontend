import { Component, OnInit } from '@angular/core';
import { SqlForeignKeyEdgeMappingComponent } from '../sql-foreign-key-edge-mapping/sql-foreign-key-edge-mapping.component';
import { SqlJoinTableEdgeMappingComponent } from '../sql-join-table-edge-mapping/sql-join-table-edge-mapping.component';
import { SqlNodeMappingComponent } from '../sql-node-mapping/sql-node-mapping.component';

@Component({
  selector: 'app-migrate-from-sql',
  templateUrl: './migrate-from-sql.component.html',
  styleUrls: ['./migrate-from-sql.component.css']
})
export class MigrateFromSqlComponent implements OnInit {

  nodeMappingIds: Array<number> = [0]
  highestNodeMappingId = 0;

  foreignKeyEdgeMappingIds: Array<number> = [0]
  highestForeignKeyEdgeMappingId = 0;

  joinTableEdgeMappingIds: Array<number> = [1024] // raczej nie chcemy kolizji w idkach edge mappingów, bo chcemy je zapisać w jednej mapie by je potem prosto serializować
  highestJoinTableEdgeMappingId = 1024;

  constructor() { }

  ngOnInit(): void {
  }


  addNodeMapping(){
    this.highestNodeMappingId++;
    this.nodeMappingIds.push(this.highestNodeMappingId);
  };

  onNodeMappingDeletedEvent(event: any){
    let nodeMappingComponent = event as SqlNodeMappingComponent
    const index = this.nodeMappingIds.indexOf(nodeMappingComponent.nodeMappingId);
    
    if (index > -1){
      this.nodeMappingIds.splice(index, 1);
    }
  }

  onNodeMappingUpdatedEvent(event: any){
    let nodeMappingComponent = event as SqlNodeMappingComponent
    console.log(nodeMappingComponent);
    // TODO zapisuj mapping w mapie mappingId -> obiekt NodeMapping
  }


  addJoinTableEdgeMapping(){
    this.highestJoinTableEdgeMappingId++;
    this.joinTableEdgeMappingIds.push(this.highestJoinTableEdgeMappingId);
  };

  onJoinTableEdgeMappingDeletedEvent(event: any){
    let component = event as SqlJoinTableEdgeMappingComponent
    const index = this.joinTableEdgeMappingIds.indexOf(component.joinTableEdgeMappingId);
    
    if (index > -1){
      this.joinTableEdgeMappingIds.splice(index, 1);
    }
  }

  onJoinTableEdgeMappingUpdatedEvent(event: any){
    let component = event as SqlJoinTableEdgeMappingComponent
    console.log(component);
    // TODO zapisuj mapping w mapie mappingId -> obiekt EdgeMapping
  }


  addForeignKeyEdgeMapping(){
    this.highestForeignKeyEdgeMappingId++;
    this.foreignKeyEdgeMappingIds.push(this.highestForeignKeyEdgeMappingId);
  };


  onForeignKeyEdgeMappingUpdatedEvent(event: any){
    let component = event as SqlForeignKeyEdgeMappingComponent
    console.log(component);
    // TODO zapisuj mapping w mapie mappingId -> obiekt EdgeMapping
  }

  onForeignKeyEdgeMappingDeletedEvent(event: any){
    console.log(event)
    let component = event as SqlForeignKeyEdgeMappingComponent
    const index = this.foreignKeyEdgeMappingIds.indexOf(component.foreignKeyEdgeMappingId);
    
    if (index > -1){
      this.foreignKeyEdgeMappingIds.splice(index, 1);
    }
  }
}
