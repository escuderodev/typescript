import { User } from "../model/User";
import { UserDTO } from "../controller/UserDTO"

export interface UserReposiroty {
    save(user: User): Promise<void>
    getAll(): Promise<Array<User>>
    getById(id: string): Promise<User>
    remove(id: string): Promise<void>
    update(id: string, userDTO: UserDTO): Promise<User>
}