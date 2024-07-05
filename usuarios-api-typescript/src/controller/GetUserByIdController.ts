import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const getUserById = async (req: Request, res: Response) => {

    const usuario = await prisma.user.findUnique({
        where: {
          id: req.params.id,
        },
      })
    return res.status(200).json({usuario})
}