import { ColumnMappingComponent } from "./components/common/column-mapping/column-mapping.component";
import { MappingComponent, Updateable } from "./interfaces/components";
import { Mapping } from "./interfaces/mapping-schemas";

export function getMappedColumns(columnMappingComponents: Map<number, ColumnMappingComponent>): Map<String, String> {
    let map: Map<String, String> = new Map();
    for (const entry of columnMappingComponents){
      const sqlColumn = entry[1].sqlColumn
      const neo4jProperty = entry[1].neo4jProperty
      map.set(sqlColumn, neo4jProperty)
    }
    return map;
  }

export function addMappingIdAndUpdate(arr: Array<number>, id: number, upd: Updateable){
  arr.push(id)
  upd.onUpdate()
}

export function removeMappingIdAndUpdate(arr: Array<number>, id: number, upd: Updateable){
  const index = arr.indexOf(id);
  
  if (index > -1){
    arr.splice(index, 1);
  }
  upd.onUpdate()
}

export function saveMappingIfValidAndUpdate<T extends Mapping>(map: Map<number, T>, component: MappingComponent, upd: Updateable){
  if (component.hasValidInput())
    map.set(component.mappingId, <T>component.getMapping())
  else
    map.delete(component.mappingId)
  upd.onUpdate()
}

export function jsonReplacer(_: any, value: any) {
  if (value instanceof Map) 
    return Object.fromEntries(value.entries())
  else 
    return value;
}

export function generateJsonUri(obj: Mapping) {
  const jsonStr = JSON.stringify(obj, jsonReplacer);
  return "data:application/json;charset=UTF-8," + encodeURIComponent(jsonStr);
}
