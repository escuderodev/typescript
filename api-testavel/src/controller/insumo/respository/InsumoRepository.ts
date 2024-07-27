import { Request } from "express";
import { CreateInsumoResponse } from "../../../use-cases/create-insumo";

export interface InsumoRepository {
    save(req: Request): Promise<CreateInsumoResponse>;
    getAll(): Promise<CreateInsumoResponse>;
    getById(id: string): Promise<CreateInsumoResponse>;
    update(req: Request): Promise<CreateInsumoResponse>;
    delete(req: Request): Promise<void>;
}