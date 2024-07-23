import { Request, Response } from "express"
import { DisciplineGetAllService } from "../services/DisciplineGetAllService"

export class DisciplineGetAllController {

    constructor(readonly service: DisciplineGetAllService) {
    }

    async execute(request: Request, response: Response) {
        const disciplinies = await this.service.execute()
        response.status(200).json({disciplinies})
    }
}