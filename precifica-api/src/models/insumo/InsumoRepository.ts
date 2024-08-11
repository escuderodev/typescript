import { Insumo } from "./Insumo";

export interface InsumoRepository {

    save(insumo: Insumo): Promise<Insumo | null>
    findAll(): Promise<Insumo | null>
    findById(id: string): Promise<Insumo | null>
    update(insumo: Insumo, id: string): Promise<Insumo | null>
    delete(id: string): void
}