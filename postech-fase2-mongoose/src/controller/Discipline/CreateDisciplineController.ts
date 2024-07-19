import { Request, Response } from "express"
import { CreateDisciplineService } from "../../service/Discipline/CreateDisciplineService"

export const createDiscipline = async (req: Request, res: Response) => {

    const createDisciplineService = new CreateDisciplineService()
    await createDisciplineService.execute(req, res)
    
    res.status(201).json({
        message: "create discipline is success!"
    })
}