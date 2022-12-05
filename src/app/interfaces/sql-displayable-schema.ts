export interface Schema {
    tables: Array<Table>
}
  
export interface Table {
    columns: Array<Column>
    name: String
}
  
export interface Column {
    name: String
    type: String
    foreignKey: String | null
}
  