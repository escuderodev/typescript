import { Request, Response } from "express"
import { DisciplineCreateService } from "../services/DisciplineCreateService"

export class DisciplineCreateController {

    constructor(readonly service: DisciplineCreateService) {
    }

    async execute(request: Request, response: Response) {
        const { title } = request.body
        const discipline = await this.service.execute(title)
        response.status(201).json({discipline: discipline})
    }
}