import { Injectable } from '@angular/core';
import { Graph, Node, Edge } from 'src/app/interfaces/graph';
import { SqlEdgeMapping, SqlNodeMapping, SqlSchemaMapping, JoinTableEdgeMapping } from 'src/app/interfaces/mapping-schemas';

@Injectable({
  providedIn: 'root'
})
export class SqlMappingToGraphService {

  constructor() { }

  convert(sqlSchemaMapping: SqlSchemaMapping): Graph {
    
    return {
      nodes: this.getNodes(sqlSchemaMapping.nodes),
      edges: this.getEdges(sqlSchemaMapping.nodes, sqlSchemaMapping.edges)
    }
  }

  private getNodes(nodeMappings: Array<SqlNodeMapping>): Array<Node> {
    return nodeMappings.map(this.getNode)
  }

  private getNode(nodeMapping: SqlNodeMapping): Node {
    return {
      label: nodeMapping.nodeLabel,
      properties: Array.from(nodeMapping.mappedColumns.values())
    }
  }

  private getEdges(nodeMappings: Array<SqlNodeMapping>, edgeMappings: Array<SqlEdgeMapping>): Array<Edge> {
    return edgeMappings.map(
      edgeMapping => {
        let properties: Array<String>
        if ((<JoinTableEdgeMapping>edgeMapping).mappedColumns !== undefined)
          properties = Array.from((<JoinTableEdgeMapping>edgeMapping).mappedColumns.values())
        else 
          properties = []

        let fromNode = this.getNodeForTable(edgeMapping.from, nodeMappings)
        let toNode = this.getNodeForTable(edgeMapping.to, nodeMappings)

        if (fromNode === undefined || toNode === undefined)
          return undefined;
        
        else return {
          fromNode: fromNode,
          toNode: toNode,
          label: edgeMapping.edgeLabel,
          properties: properties
        }
      }
    ).filter(e => e !== undefined)
    .map(e => <Edge>e)
  }

  private getNodeForTable(table: String, nodeMappings: Array<SqlNodeMapping>): Node | undefined {
    const nodes: Array<Node> = nodeMappings.filter(
      nodeMapping => {
        return nodeMapping.sqlTableName == table;
      }
    ).map(this.getNode)

    return nodes.at(0)
  }
}
