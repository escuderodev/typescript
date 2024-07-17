import { Request, Response } from "express"
import { UpdateDisciplineService } from "../../service/Discipline/UpdateDisciplineService"

export const updateDiscipline = async (req: Request, res: Response) => {

    const updateDisciplineService = new UpdateDisciplineService()

    try {
        const discipline = await updateDisciplineService.execute(req, res)
        return res.status(200).json(discipline)
    } catch (error) {
        return res.status(200).json({
            message: `Discipline Id ${req.params.id} not found!`
          })
    }

}