import { Request, Response } from "express"
import { DeleteUserService } from "../service/DeleteUserService"

export const deleteUser = async (req: Request, res: Response) => {

    const deleteUserService = new DeleteUserService()
    await deleteUserService.execute(req)
    return res.status(200).json({message: 'Usuário deletado com sucesso!'})
}