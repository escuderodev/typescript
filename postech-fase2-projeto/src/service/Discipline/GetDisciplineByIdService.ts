import { Request } from "express"
import { DisciplineRepository } from "../../repository/DisciplineRepository"

export class GetDisciplineByIdService  {

    async execute(req: Request) {

        const disciplineRepository = new DisciplineRepository()
        return await disciplineRepository.getById(req)
    }
}