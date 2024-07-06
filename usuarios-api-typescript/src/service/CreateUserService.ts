import { Request } from "express"
import { UserReposiroty } from "../repository/UserReposiroty"

export class CreateUserService  {

    async execute(req: Request) {

        const userReposiroty = new UserReposiroty()
        return userReposiroty.save(req)
    }
}