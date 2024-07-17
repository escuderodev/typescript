import { Request, Response } from "express"
import { DisciplineRepository } from "../../repository/DisciplineRepository"

export class CreateDisciplineService {

    async execute(req: Request, res: Response) {

        const disciplineRepository = new DisciplineRepository()

        const { title } = req.body

        // validations
    
        // check requireds fields
        if(!title) {
            return res.status(422).json({message: 'title field is required!'})
        }
    
        // check if discipline not exists
        const titleExists = await disciplineRepository.getByTitle(title)

        if(titleExists) {
            return res.status(422).json({message: "title already registered!"})
        }
    
        // create discipline
        return disciplineRepository.save(title)
    }
}