import { Request, Response } from "express"
import { DisciplineRepository } from "../../repository/DisciplineRepository"

export class UpdateDisciplineService  {

    async execute(req: Request, res: Response) {

        const disciplineRepository = new DisciplineRepository()
        const title = req.body.title

        // check requireds fields
        if(!title) {
            return res.status(422).json({message: 'title field is required!'})
        }
            
        return await disciplineRepository.update(req, title)
    }
}