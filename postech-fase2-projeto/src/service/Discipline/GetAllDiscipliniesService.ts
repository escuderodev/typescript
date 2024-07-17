import { Request } from "express"
import { DisciplineRepository } from "../../repository/DisciplineRepository"

export class GetAllDiscipliniesService {

    async execute(req: Request) {

        const disciplineRepository = new DisciplineRepository()
        return await disciplineRepository.getAll()
    }
}