import { Injectable } from '@angular/core';
import { Graph, Node, Edge } from 'src/app/interfaces/graph';

@Injectable({
  providedIn: 'root'
})
export class GraphVisualizationService {

  constructor() { }

  toDotFormat(graph: Graph): String {
    console.log("digraph{\n" + 
    graph.nodes.map(this.nodeAsString.bind(this)).join("\n") + "\n" +
    graph.edges.map(this.edgeAsString.bind(this)).join("\n") +
    "\n}")
    return "digraph{\n" + 
      graph.nodes.map(this.nodeAsString.bind(this)).join("\n") + "\n" +
      graph.edges.map(this.edgeAsString.bind(this)).join("\n") +
      "\n}"
  }

  nodeAsString(node: Node): String {
    return node.id + " [label=\"" + node.label + this.propsAsString(node.properties) + "\" shape=circle fontsize=16];"
  }

  edgeAsString(edge: Edge): String {
    return edge.fromNode.id+ " -> " + edge.toNode.id + " [label=\"" + edge.label + this.propsAsString(edge.properties) + "\" shape=circle fontsize=16];"
  }

  propsAsString(props: Array<String>): string {
    if (props.length > 0) 
      return "(" + props.join(", ") + ")"
    else return ""
  }

}
