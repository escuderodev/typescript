import { DisciplineDTO } from  "../../models/DisciplineDTO"
import { Discipline } from "../Discipline"
import { Uuid } from "../Uuid"

export interface DisciplineRepository {
    save(discipline: Discipline): Promise<void>
    getAll(): Promise<Array<Discipline>>
    getById(id: Uuid): Promise<Discipline>
    remove(id: Uuid): Promise<void>
    update(id: Uuid, disciplineDTO: DisciplineDTO): Promise<Discipline>
}