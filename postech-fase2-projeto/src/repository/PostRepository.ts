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

    async update(id: string, title: string, description: string, discipline: string) {
        return await prisma.post.update({
            where: {
                id: id
            },
            data: {
                title: title,
                description: description,
                discipline: discipline
            }
        })
    }

    async delete(id: string) {
        await prisma.post.delete({
            where: {
                id: id
            }
        })
    }
}