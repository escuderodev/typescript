import { Request } from "express"
import { User } from "../model/User"

export interface GetAllUsersReposiroty {
    getAll(): Promise<Array<User>>
}