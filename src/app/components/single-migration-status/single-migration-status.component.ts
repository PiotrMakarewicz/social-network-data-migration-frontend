import { Component, Input, OnInit } from '@angular/core';
import { map, Subscription } from 'rxjs';
import BackendService from 'src/app/services/backend/backend.service';

@Component({
  selector: '[app-single-migration-status]',
  templateUrl: './single-migration-status.component.html',
  styleUrls: ['./single-migration-status.component.css']
})
export class SingleMigrationStatusComponent implements OnInit {

  @Input() migrationId = ""
  @Input() status = "SUCCEEDED"
  @Input() failure_reason = ""

  constructor(private backendService: BackendService) { }

  subscription: null | Subscription = null

  ngOnInit(): void {
    if (this.status == "FAILED"){
      this.subscription = this.backendService.getMigrationFailureReason(this.migrationId).pipe(map(
        payload => {
          this.failure_reason = payload
        }
      )).subscribe()
      
    }
  }

  ngOnDestroy() {
    if(this.subscription !== null){
      this.subscription.unsubscribe()
    }
  }

}
