import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select-csv-file',
  templateUrl: './select-csv-file.component.html',
  styleUrls: ['./select-csv-file.component.css']
})
export class SelectCsvFileComponent implements OnInit {

  constructor() { }
  
  
  fileUrl: String = "file:///"
  withHeaders: boolean = false

  @Output() csvFileSelectedEvent = new EventEmitter<String>()
  @Output() withHeadersEvent = new EventEmitter<boolean>()

  onApplyClick(){
    this.csvFileSelectedEvent.emit(this.fileUrl)
    this.withHeadersEvent.emit(this.withHeaders)
  }

  ngOnInit(): void {
  }

}
