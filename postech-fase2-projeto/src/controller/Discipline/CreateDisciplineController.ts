import { Request, Response } from "express"
import { CreateDisciplineService } from "../../service/Discipline/CreateDisciplineService"

export const createDiscipline = async (req: Request, res: Response) => {

    const createDisciplineService = new CreateDisciplineService()
    const discipline = await createDisciplineService.execute(req, res)
    return res.status(201).json({
        message: "create discipline is success!",
        discipline: discipline
    })
}