export interface SqlSchemaMapping {
    nodes: Array<SqlNodeMapping>,
    edges: Array<SqlEdgeMapping>
}

export interface SqlNodeMapping {
    nodeLabel: String,
    sqlTableName: String,
    mappedColumns: Map<String, String>
}

export interface SqlEdgeMapping {
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
