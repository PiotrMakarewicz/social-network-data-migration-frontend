import { Component, Input, OnInit } from '@angular/core';
import { graphviz } from 'd3-graphviz'
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-graph-visualization',
  templateUrl: './graph-visualization.component.html',
  styleUrls: ['./graph-visualization.component.css']
})
export class GraphVisualizationComponent implements OnInit {

  @Input() graphInDotFormat: Observable<String> = new Observable();
  subscription: Subscription = new Subscription();

  updateGraph(dotstr: String){
    graphviz("#graph")
    .attributer((datum, index, nodes) => {
      if (datum.tag == "svg") {
        datum.attributes = {
            ...datum.attributes,
            width: '600px',
            height: '600px'
        };
      }
    })
    .fit(true)
    .renderDot(dotstr.toString())
  }

  constructor() { }

  ngOnInit(): void {
    this.subscription = this.graphInDotFormat.subscribe(dotstr => this.updateGraph(dotstr))
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
