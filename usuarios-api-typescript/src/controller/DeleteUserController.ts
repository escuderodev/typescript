import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const deleteUser = async (req: Request, res: Response) => {

    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })
    return res.status(200).json({message: 'Usuário deletado com sucesso!'})
}