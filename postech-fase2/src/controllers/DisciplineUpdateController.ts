import { Request, Response } from "express"
import { DisciplineUpdateService } from "../services/DisciplineUpdateService"

export class DisciplineUpdateController {

    constructor(readonly service: DisciplineUpdateService) {
    }

    async execute(request: Request, response: Response) {
        const { id } = request.params
        const { title } = request.body

        try {
            const discipline = await this.service.execute(id, title)
            response.status(200).json({discipline: discipline})
        } catch (error) {
            response.status(200).json({message: `Discipline id ${id} not found!`})
        }
    }
}