import { Request } from "express"
import { DisciplineRepository } from "../../database/repository/DisciplineRepository"

export class GetAllDiscipliniesService  {

    async execute(req: Request) {

        const disciplineRepository = new DisciplineRepository()
        return await disciplineRepository.getAll()
    }
}