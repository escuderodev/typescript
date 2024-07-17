import { Request } from "express"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export class PostRepository {
    async save(title: string, description: string, discipline: string) {

        const post = await prisma.post.create({
            data: {
                title: title,
                description: description,
                discipline: discipline
            },
        })
        return post
    }

    async getAll() {
        return await prisma.post.findMany({
            select: {
                id: true,
                title: true,
                description: false,
                discipline: true
            }
        })
    }

    async getById(req: Request) {
        const post = await prisma.post.findUnique({
            where: {
              id: req.params.id,
            }
          })
          return post
    }

    async update(req: Request) {
        return await prisma.post.update({
            where: {
                id: req.params.id
            },
            data: {
                title: req.body.title,
                description: req.body.description,
                discipline: req.body.discipline
            }
        })
    }

    async delete(req: Request) {
        await prisma.post.delete({
            where: {
                id: req.params.id
            }
        })
    }
}