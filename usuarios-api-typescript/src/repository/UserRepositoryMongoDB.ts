import { UserDTO } from "../controller/UserDTO";
import { User } from "../model/User";
import { UserReposiroty } from "./UserRepository";

export class UserRepositoryMongoDB implements UserReposiroty {
    save(user: User): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getAll(): Promise<Array<User>> {
        throw new Error("Method not implemented.");
    }
    getById(id: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    remove(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    update(id: string, userDTO: UserDTO): Promise<User> {
        throw new Error("Method not implemented.");
    }

}