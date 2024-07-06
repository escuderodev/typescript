import { Request, Response } from "express"
import { UpdateUserService } from "../service/UpdateUserService"

export const updateUser = async (req: Request, res: Response) => {

    const updateUserService = new UpdateUserService()
    const user = await updateUserService.execute(req)
    return res.status(200).json(user)
}