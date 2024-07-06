import { Request, Response } from "express"
import { GetUserByIdService } from "../service/GetUserByIdService"

export const getUserById = async (req: Request, res: Response) => {

  const getUserByIdService = new GetUserByIdService()
  const user = await getUserByIdService.execute(req)
  return res.status(200).json({user})
}