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

    async getAll() {
        return await prisma.user.findMany()
    }

    async getById(req: Request) {
        const userSearch = await prisma.user.findUnique({
            where: {
              id: req.params.id,
            },
          })
          return userSearch
    }

    async update(req: Request) {
        return await prisma.user.update({
            where: {
                id: req.params.id
            },
            data: {
                name: req.body.name,
                email: req.body.email,
                age: req.body.age
            }
        })
    }
}