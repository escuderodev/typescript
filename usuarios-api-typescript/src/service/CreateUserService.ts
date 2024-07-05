import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export class CreateUserService  {

    async execute(req: Request) {
        const user = await prisma.user.create({
            data: {
                name: req.body.email,
                email: req.body.email,
                age: req.body.age
            }
        })
        return user
    }
}