import { Request, Response } from "express"
import { UpdateDisciplineService } from "../../service/Discipline/UpdateDisciplineService"

export const updateDiscipline = async (req: Request, res: Response) => {

    const updateDisciplineService = new UpdateDisciplineService()

    const result = await updateDisciplineService.execute(req)
    
    res.status(200).json({
        message: result,
    })

}