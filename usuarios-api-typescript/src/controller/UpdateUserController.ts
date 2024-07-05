import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const updateUser = async (req: Request, res: Response) => {

    await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            name: req.body.name,
            email: req.body.email,
            age: req.body.age
        }
    })
    const usuario = req.body
    return res.status(201).json(usuario)
}