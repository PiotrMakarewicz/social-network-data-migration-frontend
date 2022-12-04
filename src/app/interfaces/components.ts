import { Mapping } from "./mapping-schemas"

export interface MappingComponent{
    mappingId: number
    getMapping(): Mapping
    hasValidInput(): boolean
}

export interface Updateable {
    onUpdate(): void
}
