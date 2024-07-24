import { DisciplineRepository } from "../models/repository/DisciplineRepository"

export class DisciplineDeleteService {
    
    constructor(readonly repository: DisciplineRepository) {
    }

    async execute(id: string) {
        await this.repository.deleteById(id)
    }
}