import { DisciplineDTO } from  "../../models/DisciplineDTO"
import { Discipline } from "../Discipline"
import { Uuid } from "../Uuid"

export interface DisciplineRepository {
    save(discipline: Discipline): void;
    findById(id: string): Discipline | undefined;
    findAll(): Discipline[];
    deleteById(id: string): void;
    update(discipline: Discipline): void;
}