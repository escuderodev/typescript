import { Request } from "express"
import { DisciplineRepository } from "../../repository/DisciplineRepository"

export class GetAllDisciplinesService {

    async execute(req: Request) {

        const disciplineRepository = new DisciplineRepository()
        return await disciplineRepository.getAll()
    }
}