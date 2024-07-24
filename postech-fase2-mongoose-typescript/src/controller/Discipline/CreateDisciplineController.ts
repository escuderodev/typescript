import { Request, Response } from "express"
import { CreateDisciplineService } from "../../service/Discipline/CreateDisciplineService"

export class CreateDisciplineController {

    constructor(readonly service: CreateDisciplineService){
    }

    async createDiscipline(req: Request, res: Response) {

        await this.service.execute(req, res)
        res.status(201).json({
            message: "create discipline is success!"
        })
    }
}
