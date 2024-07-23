import { Request } from "express"
import { DisciplineRepository } from "../../repository/DisciplineRepository"
import Discipline from "../../model/Discipline"

export class UpdateDisciplineService  {

    async execute(req: Request) {

        const disciplineRepository = new DisciplineRepository()
        const id = req.params.id

        const discipline = await Discipline.findById({_id: id})

        if(!discipline) {
            return `Discipline Id ${id} not found!`
        }

        await disciplineRepository.update(req)
        return `Discipline update is success!`
    }
}