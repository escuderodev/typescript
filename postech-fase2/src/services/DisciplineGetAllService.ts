import { DisciplineRepository } from "../models/repository/DisciplineRepository"

export class DisciplineGetAllService {
    
    constructor(readonly repository: DisciplineRepository) {
    }

    async execute() {
        try {
            const disciplinies = await this.repository.findAll()
            return disciplinies
        } catch (error) {
            console.log(error)
        }
    }
}