import { Request } from "express";
import { Insumo } from "../../entities/insumo";
import { InsumoRepository } from "../../controller/insumo/respository/InsumoRepository";
import { CreateInsumoResponse } from "../../use-cases/create-insumo";

export class insumoRepositoryInMongoDB implements InsumoRepository {
    
    save(req: Request): Promise<CreateInsumoResponse> {
        throw new Error("Method not implemented.");
    }
    getAll(): Promise<CreateInsumoResponse> {
        throw new Error("Method not implemented.");
    }
    getById(id: string): Promise<CreateInsumoResponse> {
        throw new Error("Method not implemented.");
    }
    update(req: Request): Promise<CreateInsumoResponse> {
        throw new Error("Method not implemented.");
    }
    delete(req: Request): Promise<void> {
        throw new Error("Method not implemented.");
    }

}