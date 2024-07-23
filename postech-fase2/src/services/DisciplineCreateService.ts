import { Discipline } from "../models/Discipline";
import { DisciplineRepository } from "../models/repository/DisciplineRepository";

export class DisciplineCreateService {
    constructor(readonly repository: DisciplineRepository) {
    }

    async execute(title: string) {
        const discipline = Discipline.create(title)
        await this.repository.save(discipline)
        return discipline
    }
}