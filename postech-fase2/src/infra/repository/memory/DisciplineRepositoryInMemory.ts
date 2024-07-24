import { Discipline } from "../../../models/Discipline";
import { DisciplineDTO } from "../../../models/DisciplineDTO";
import { Uuid } from "../../../models/Uuid";
import { DisciplineRepository } from "../../../models/repository/DisciplineRepository";

export class DisciplineRepositoryInMemory implements DisciplineRepository {
    private disciplines: Map<string, Discipline>;

    constructor() {
        this.disciplines = new Map<string, Discipline>();
    }

    save(discipline: Discipline): void {
        this.disciplines.set(discipline.getId().toString(), discipline);
    }

    findById(id: string): Discipline | undefined {
        return this.disciplines.get(id);
    }

    findAll(): Discipline[] {
        return Array.from(this.disciplines.values());
    }

    deleteById(id: string): void {
        this.disciplines.delete(id);
    }

    update(discipline: Discipline): void {
        if (this.disciplines.has(discipline.getId().toString())) {
            this.disciplines.set(discipline.getId().toString(), discipline);
        } else {
            throw new Error("Discipline not found");
        }
    }
}