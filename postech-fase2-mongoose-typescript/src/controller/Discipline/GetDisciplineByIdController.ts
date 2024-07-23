import { Request, Response } from "express"
import { GetDisciplineByIdService } from "../../service/Discipline/GetDisciplineByIdService"

export const getDisciplineById = async (req: Request, res: Response) => {

  const getDisciplineByIdService = new GetDisciplineByIdService()
  const discipline = await getDisciplineByIdService.execute(req)

  if(!discipline) {
    res.status(200).json({message: `Discipline Id ${req.params.id} not found!`})
    return
  }
  
  res.status(200).json({message: discipline})
}