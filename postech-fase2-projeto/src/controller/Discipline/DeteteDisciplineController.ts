import { Request, Response } from "express"
import { DeleteDisciplineService } from "../../service/Discipline/DeleteDisciplineService"

export const deleteDiscipline = async (req: Request, res: Response) => {

    const deleteDisciplineService = new DeleteDisciplineService()

    try {
        await deleteDisciplineService.execute(req)
        return res.status(200).json({message: 'Discipline deleted!'})
    } catch (error) {
        return res.status(200).json({
            message: `Discipline Id ${req.params.id} not found!`
          })
    }
}