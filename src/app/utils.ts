import { ColumnMappingComponent } from "./components/common/column-mapping/column-mapping.component";

export function getMappedColumns(columnMappingComponents: Map<number, ColumnMappingComponent>): Map<String, String> {
    let map: Map<String, String> = new Map();
    for (const entry of columnMappingComponents){
      const sqlColumn = entry[1].sqlColumn
      const neo4jProperty = entry[1].neo4jProperty
      map.set(sqlColumn, neo4jProperty)
    }
    return map;
  }