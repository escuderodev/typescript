import { DisciplineRepository } from "../models/repository/DisciplineRepository"

export class DisciplineGetByIdService {
    
    constructor(readonly repository: DisciplineRepository) {
    }

    async execute(id: string) {
        const discipline = await this.repository.findById(id)
        console.log(`Discipline recuperada do banco ${discipline}`)
        return discipline
    }
}