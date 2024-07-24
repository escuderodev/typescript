import { Request } from "express"
import { DisciplineRepository } from "../../database/repository/DisciplineRepository"

export class GetDisciplineByIdService  {

    async execute(req: Request) {
        const disciplineRepository = new DisciplineRepository()
        const id = req.params.id
        return await disciplineRepository.getById(id)
    }
}