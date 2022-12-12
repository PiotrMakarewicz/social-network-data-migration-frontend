export interface Graph {
    nodes: Array<Node>
    edges: Array<Edge>
}

export interface Node {
    id: String
    label: String
    properties: Array<String>
}

export interface Edge {
    fromNode: Node
    toNode: Node
    label: String
    properties: Array<String>
}
