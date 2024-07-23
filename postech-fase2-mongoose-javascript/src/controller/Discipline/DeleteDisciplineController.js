import { DeleteDisciplineService } from "../../service/Discipline/DeleteDisciplineService.js"
import Discipline from "../../model/Discipline.js"

export const deleteDiscipline = async (req, res) => {

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