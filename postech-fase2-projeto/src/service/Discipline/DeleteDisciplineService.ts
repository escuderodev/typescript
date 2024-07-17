import { Request } from "express"
import { DisciplineRepository } from "../../repository/DisciplineRepository"

export class DeleteDisciplineService  {

    async execute(req: Request) {

        const disciplineRepository = new DisciplineRepository()
        return disciplineRepository.delete(req)
    }
}