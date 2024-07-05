import { Request } from "express"
// import { PrismaClient } from "@prisma/client"
import { CreateUserReposiroty } from "../repository/CreateUserReposiroty"

// const prisma = new PrismaClient()

export class CreateUserService  {

    async execute(req: Request) {

        const createUserRepository = new CreateUserReposiroty()
        return createUserRepository.save(req)
    }
}