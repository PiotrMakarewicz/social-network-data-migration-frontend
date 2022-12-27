export interface Mapping {}

export interface SqlSchemaMapping extends Mapping {
    nodes: Array<SqlNodeMapping>,
    edges: Array<SqlEdgeMapping>
}

export interface SqlNodeMapping extends Mapping  {
    nodeLabel: String,
    sqlTableName: String,
    mappedColumns: Map<String, String>
}

export interface SqlEdgeMapping extends Mapping  {
    edgeLabel: String,
    from: String,
    to: String
}

export interface JoinTableEdgeMapping extends SqlEdgeMapping{
    joinTable: String,
    mappedColumns: Map<String, String>
}

export interface ForeignKeyEdgeMapping extends SqlEdgeMapping {
    foreignKeyTable: String
}

export interface CsvSchemaMapping extends Mapping {
    fromNode: CsvNodeMapping
    toNode: CsvNodeMapping
    edge: CsvEdgeMapping
}

export interface CsvNodeMapping extends Mapping {
    nodeLabel: String,
    mappedColumns: Map<String, String>
}

export interface CsvEdgeMapping extends Mapping {
    edgeLabel: String,
    mappedColumns: Map<String, String>
}
