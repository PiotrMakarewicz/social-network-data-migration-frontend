import { Injectable } from '@angular/core';
import { Edge, Graph, Node } from 'src/app/interfaces/graph';
import { CsvSchemaMapping } from 'src/app/interfaces/mapping-schemas';

@Injectable({
  providedIn: 'root'
})
export class CsvMappingToGraphService {

  constructor() { }

  convert(mapping: CsvSchemaMapping): Graph {
    return {
      nodes: this.getNodes(mapping),
      edges: this.getEdges(mapping)
    }
  }

  getNodes(mapping: CsvSchemaMapping): Array<Node> {
    return [
      this.getFromNode(mapping),
      this.getToNode(mapping)
    ]
  }

  getFromNode(mapping: CsvSchemaMapping): Node {
    return {
      id: "from",
      label: mapping.fromNode.nodeLabel,
      properties: Array.from(mapping.fromNode.mappedColumns.values())
    }
  }

  getToNode(mapping: CsvSchemaMapping): Node {
    return {
      id: "to",
      label: mapping.toNode.nodeLabel,
      properties: Array.from(mapping.toNode.mappedColumns.values())
    }
  }

  getEdges(mapping: CsvSchemaMapping): Array<Edge> {
    return [
      {
        fromNode: this.getFromNode(mapping),
        toNode: this.getToNode(mapping),
        label: mapping.edge.edgeLabel,
        properties: Array.from(mapping.edge.mappedColumns.values())
      }
    ]
  }
}
