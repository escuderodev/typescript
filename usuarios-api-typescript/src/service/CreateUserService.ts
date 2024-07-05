import { Request } from "express"
import { CreateUserReposiroty } from "../repository/CreateUserReposiroty"

export class CreateUserService  {

    async execute(req: Request) {

        const createUserRepository = new CreateUserReposiroty()
        return createUserRepository.save(req)
    }
}