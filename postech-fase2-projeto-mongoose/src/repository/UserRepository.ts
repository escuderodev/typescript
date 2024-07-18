import { Request } from "express"
import User from "../model/User"

export class UserRepository {
    async save(req: Request, passwordHash: string) {
        const { name, email } = req.body

        const user = {
            name: name,
            email: email,
            password: passwordHash
        }
        const newUser = await User.create(user)

        return {
            id: newUser.id,
            name: newUser.name,
            email: newUser.email
        }
    }

    async getAll() {
        return await User.find()
    }

    async getById(req: Request) {
        // const userSearch = await prisma.user.findUnique({
        //     where: {
        //       id: req.params.id,
        //     },
        //     select: {
        //         id: true,
        //         name: true,
        //         email: true,
        //         password: false
        //     }
        //   })
        //  return userSearch
    }

    async getByEmail(email: string) {
        const userSearch = await User.findOne({email: email})
        return userSearch
    }

    async update(req: Request, passwordHash: string) {
        // return await prisma.user.update({
        //     where: {
        //         id: req.params.id
        //     },
        //     data: {
        //         name: req.body.name,
        //         email: req.body.email,
        //         password: passwordHash
        //     },
        //     select: {
        //         id: true,
        //         name: true,
        //         email: true,
        //         password: false
        //     }
        // })
    }

    async delete(req: Request) {
        // await prisma.user.delete({
        //     where: {
        //         id: req.params.id
        //     }
        // })
    }
}