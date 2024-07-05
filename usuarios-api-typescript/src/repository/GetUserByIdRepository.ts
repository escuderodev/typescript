import { Request } from "express"
import { User } from "../model/User"

export interface GetUserByIdReposiroty {
    getById(id: string): Promise<User>
}