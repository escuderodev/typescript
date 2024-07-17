import { Request, Response } from "express"
import { GetAllDisciplinesService } from "../../service/Discipline/GetAllDisciplinesService"

export const getAllDisciplines = async (req: Request, res: Response) => {

    const getAllDisciplines = new GetAllDisciplinesService()
    const disciplineList = await getAllDisciplines.execute(req)
    return res.status(200).json({disciplineList})
}