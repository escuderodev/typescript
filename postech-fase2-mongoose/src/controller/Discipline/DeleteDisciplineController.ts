import { Request, Response } from "express"
import { DeleteDisciplineService } from "../../service/Discipline/DeleteDisciplineService"
import Discipline from "../../model/Discipline"

export const deleteDiscipline = async (req: Request, res: Response) => {

    const deleteDisciplineService = new DeleteDisciplineService()
    const id = req.params.id

    const discipline = await Discipline.findById({_id: id})
    if(!discipline) {
      res.status(200).json({message: `Discipline Id ${req.params.id} not found!`})
      return
    }
    
    try {
        await deleteDisciplineService.execute(req)
        res.status(200).json({message: 'Discipline deleted!'})
    } catch (error) {
        res.status(500).json({erro: error})
    }
}