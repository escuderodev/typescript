import { Request } from "express"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

class DeleteUserReposiroty {
    async delete(req: Request) {
        await prisma.user.delete({
            where: {
                id: req.params.id
            }
        })
    }
}

export { DeleteUserReposiroty }