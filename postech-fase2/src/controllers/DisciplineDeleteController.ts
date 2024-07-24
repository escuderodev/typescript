import { Request, Response } from "express"
import { Uuid } from "../models/Uuid"
import { DisciplineDeleteService } from "../services/DisciplineDeleteService"

export class DisciplineDeleteController {

    constructor(readonly service: DisciplineDeleteService) {
    }

    async execute(request: Request, response: Response) {
        let id: string|Uuid = request.params.id
        await this.service.execute(id)
        response.status(204).json({})
    }
}