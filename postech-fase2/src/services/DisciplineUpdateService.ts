import { Discipline } from "../models/Discipline"
import { DisciplineRepository } from "../models/repository/DisciplineRepository"

export class DisciplineUpdateService {
    
    constructor(readonly repository: DisciplineRepository) {
    }

    async execute(id: string, title: string) {
        let discipline = Discipline.create(title, id)
        return await this.repository.update(discipline)
    }
}