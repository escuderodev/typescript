import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"
import { CreateUserService } from "../service/CreateUserService"

const prisma = new PrismaClient()

export const createUser = async (req: Request, res: Response) => {

    const createUserService = new CreateUserService()
    const user = await createUserService.execute(req)
    return res.status(201).json(user)
}