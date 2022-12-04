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
