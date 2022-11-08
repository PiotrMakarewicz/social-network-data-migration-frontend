import { Component, OnInit } from '@angular/core';
import { SqlNodeMappingComponent } from '../sql-node-mapping/sql-node-mapping.component';

@Component({
  selector: 'app-migrate-from-sql',
  templateUrl: './migrate-from-sql.component.html',
  styleUrls: ['./migrate-from-sql.component.css']
})
export class MigrateFromSqlComponent implements OnInit {

  nodeMappingIds: Array<number> = [0]
  highestNodeMappingId = 0;

  constructor() { }

  ngOnInit(): void {
  }


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

  addNodeMapping(){
    this.highestNodeMappingId++;
    this.nodeMappingIds.push(this.highestNodeMappingId);
  };
}
