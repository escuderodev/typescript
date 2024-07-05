import { Request } from "express"
import { DeleteUserReposiroty } from "../repository/DeleteUserRepository"

export class DeleteUserService  {

    async execute(req: Request) {

        const deleteUserRepository = new DeleteUserReposiroty()
        return deleteUserRepository.delete(req)
    }
}