import { Discipline } from "../../../models/Discipline";
import { Uuid } from "../../../models/Uuid";
import { DisciplineRepository } from "../../../models/repository/DisciplineRepository";

export class DisciplineRepositoryInMemory implements DisciplineRepository {
    private disciplinies: Array<Discipline> = []

    async save(discipline: Discipline): Promise<void> {
        this.disciplinies.push(discipline)
    }

    async getAll(): Promise<Discipline[]> {
        return this.disciplinies
    }

    getById(id: Uuid): Promise<Discipline> {
        throw new Error("Method not implemented.");
    }

    remove(id: Uuid): Promise<void> {
        throw new Error("Method not implemented.");
    }

    update(id: Uuid): Promise<Discipline> {
        throw new Error("Method not implemented.");
    }
}