import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const getAllUsers = async (req: Request, res: Response) => {

    const userList = await prisma.user.findMany()
    return res.status(200).json({userList})
}