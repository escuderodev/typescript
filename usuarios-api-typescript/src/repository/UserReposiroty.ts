import { Request } from "express"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export class UserReposiroty {
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

    async delete(req: Request) {
        await prisma.user.delete({
            where: {
                id: req.params.id
            }
        })
    }

    getById(id: string) {

    }

    // update(id: string, user: User) {

    // }

}

// export { UserReposiroty }