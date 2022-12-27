import { Component, OnInit } from '@angular/core';
import { map, Subscription } from 'rxjs';
import { MigrationStatus } from 'src/app/interfaces/payloads';
import BackendService from 'src/app/services/backend/backend.service';

@Component({
  selector: 'app-migration-status',
  templateUrl: './migration-status.component.html',
  styleUrls: ['./migration-status.component.css']
})
export class MigrationStatusComponent implements OnInit {

  migrationStatuses: Array<MigrationStatus> = []

  constructor(private backendService: BackendService) { }

  subscription: Subscription | null = null

  ngOnInit(): void {
    this.subscription = this.backendService.getMigrationStatuses()
    .pipe(
      map((payload: Object) => {
          console.log(payload)
          let entries: Array<MigrationStatus> = Object.entries(payload).map<MigrationStatus>(((entry) => {
            return {
              migrationId: entry[0],
              migrationStatus: entry[1]
            }
          }))
          console.log(entries);
          return entries;
        }
      )
    )
    .subscribe(entries => {
      this.migrationStatuses = entries
    })
  }

  ngOnDestroy(){
    if(this.subscription !== null){
      this.subscription.unsubscribe()
    }
  }



}
