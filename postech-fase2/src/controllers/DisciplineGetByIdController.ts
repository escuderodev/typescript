import { Request, Response } from "express"
import { DisciplineGetByIdService } from "../services/DisciplineGetByIdService"

export class DisciplineGetByIdController {

    constructor(readonly service: DisciplineGetByIdService) {
    }

    async execute(request: Request, response: Response) {
        let id: string = request.params.id
        
        try {
            const discipline = await this.service.execute(id)
            response.status(200).json({discipline: discipline})
        } catch (error) {
            response.status(200).json({message: `Discipline id ${id} not found!`})
        }
    }
}