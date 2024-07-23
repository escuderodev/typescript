import { Request } from "express"
import Discipline from "../model/Discipline"

export class DisciplineRepository {
    async save(req: Request) {
        const { title } = req.body
        const discipline = {
            title: title
        }
        const newDiscipline = await Discipline.create(discipline)
        return newDiscipline
    }

    async getAll() {
        return await Discipline.find()
    }

    async getById(id: string) {
        return await Discipline.findById(id)
    }

    async update(req: Request) {

        const id = req.params.id
        const { title } = req.body

        const discipline = {
            id: id,
            title: title,
            updatedAt: Date.now()
        }
        return await Discipline.updateOne({_id: id}, discipline)
    }

    async delete(req: Request) {
        const id = req.params.id
        return await Discipline.deleteOne({_id: id})
    }
}