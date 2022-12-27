export interface PostgreSchemaResponsePayload {
    databaseInfo: DatabaseInfo;    
}

export interface DatabaseInfo {
    tables: Array<TableInfo>;
}

export interface TableInfo {
    columns: Array<ColumnInfo>;
    foreignKeyColumns: Array<ForeignKeyColumnInfo>;
    tableName: String;
}

export interface ColumnInfo {
    columnName: String;
    tableName: String;
    type: String;
}

export interface ForeignKeyColumnInfo {
    foreignKeyColumn: ColumnInfo;
    referencedColumn: ColumnInfo;
}

export interface PostgreConnectionParams {
    host: String,
    dbname: String,
    user: String, 
    password: String
}

export interface Neo4jConnectionParams {
    host: String,
    user: String, 
    password: String
}

export interface PostgreMigrationRequestPayload {
    postgreConnectionParams: PostgreConnectionParams
    neo4jConnectionParams: Neo4jConnectionParams
    rawSchemaMapping: String
}

export interface MigrationStatus {
    migrationId: string,
    migrationStatus: string;
}
