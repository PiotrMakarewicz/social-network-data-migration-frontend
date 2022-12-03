import { Injectable } from '@angular/core';
import { Graph, Node, Edge } from 'src/app/interfaces/graph';

@Injectable({
  providedIn: 'root'
})
export class GraphVisualizationService {

  constructor() { }

  toDotFormat(graph: Graph): string {
    return "digraph{\n" + 
      graph.nodes.map(this.nodeAsString).join("\n") + "\n" +
      graph.edges.map(this.edgeAsString).join("\n") +
      "\n}"
  }

  nodeAsString(node: Node): string {
    return `${node.label} [label="${node.label}(${node.properties.join(", ")})"];`
  }

  edgeAsString(edge: Edge): string {
    return `${edge.fromNode.label} -> ${edge.toNode.label} [label="${edge.label}(${edge.properties.join(", ")})"];`
  }
}
