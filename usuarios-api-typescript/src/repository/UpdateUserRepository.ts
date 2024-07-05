import { Request } from "express"
import { User } from "../model/User"

export interface UpdateUserReposiroty {
    update(id: string, user: User): Promise<User>
}