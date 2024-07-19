import { Request, Response } from "express"
import { GetUserByIdService } from "../../service/User/GetUserByIdService"

export const getUserById = async (req: Request, res: Response) => {

  const getUserByIdService = new GetUserByIdService()
  const user = await getUserByIdService.execute(req)

  if(!user) {
    res.status(200).json({message: `User Id ${req.params.id} not found!`})
    return
  }
  
  res.status(200).json({message: user})
}