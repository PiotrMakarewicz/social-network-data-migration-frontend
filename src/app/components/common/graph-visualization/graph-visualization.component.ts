import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph-visualization',
  templateUrl: './graph-visualization.component.html',
  styleUrls: ['./graph-visualization.component.css']
})
export class GraphVisualizationComponent implements OnInit {

  @Input() graphInDotFormat = "digraph {}"

  constructor() { }

  ngOnInit(): void {
  }

}
