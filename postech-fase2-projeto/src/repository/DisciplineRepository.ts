import { Request } from "express"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export class DisciplineRepository {
    async save(title: string) {

        const discipline = await prisma.discipline.create({
            data: {
                title: title
            },
        })
        return discipline
    }

    async getAll() {
        return await prisma.discipline.findMany()
    }

    async getById(req: Request) {
        const discipline = await prisma.discipline.findUnique({
            where: {
              id: req.params.id,
            }
          })
          return discipline
    }

    async getByTitle(title: string) {
        const disciplineTitle = await prisma.discipline.findUnique({
            where: {
              title: title,
            }
          })
          return disciplineTitle
    }

    async update(req: Request) {
        return await prisma.discipline.update({
            where: {
                id: req.params.id
            },
            data: {
                title: req.body.title
            }
        })
    }

    async delete(req: Request) {
        await prisma.discipline.delete({
            where: {
                id: req.params.id
            }
        })
    }
}