import { Request, Response } from "express"
import { GetAllDiscipliniesService } from "../../service/Discipline/GetAllDiscipliniesService"

export const getAllDisciplinies = async (req: Request, res: Response) => {

    const getAllDiscipliniesService = new GetAllDiscipliniesService()
    const disciplineList = await getAllDiscipliniesService.execute(req)
    res.status(200).json({disciplineList})
}