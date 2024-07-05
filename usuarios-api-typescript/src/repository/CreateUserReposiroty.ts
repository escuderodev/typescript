import { Request } from "express"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

class CreateUserReposiroty {
    async save(req: Request) {
        const user = await prisma.user.create({
            data: {
                name: req.body.name,
                email: req.body.email,
                age: req.body.age
            }
        })
        return user
    }
}

export { CreateUserReposiroty }