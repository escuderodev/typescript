import { Request, Response } from "express"
import { DisciplineRepository } from "../../controller/Discipline/repository/DisciplineRepository"

export class CreateDisciplineService {

    constructor(readonly repository: DisciplineRepository) {
    }

    async execute(req: Request, res: Response) {
 
        const { title } = req.body

        // validations
        // check requireds fields
        if(!title) {
            return res.status(422).json({message: 'title field is required!'})
        }
    
        // create task
        return this.repository.save(req)

    }
}