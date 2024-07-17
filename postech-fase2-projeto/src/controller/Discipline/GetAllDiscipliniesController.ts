import { Request, Response } from "express"
import { GetAllDiscipliniesService } from "../../service/Discipline/GetAllDiscipliniesService"

export const getAllDisciplinies = async (req: Request, res: Response) => {

    const getAllDisciplinies = new GetAllDiscipliniesService()
    const disciplineList = await getAllDisciplinies.execute(req)
    return res.status(200).json({disciplineList})
}