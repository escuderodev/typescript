// import { Request } from "express"
// import { UserRepository } from "../../repository/UserRepository"
// import bcrypt from "bcrypt"

// export class UpdateUserService  {

//     async execute(req: Request) {

//         const userRepository = new UserRepository()
//         const password = req.body.password

//         // create password encoded
//         const salt = await bcrypt.genSalt(12) //add dificult
//         const passwordHash = await bcrypt.hash(password, salt) //create password encoded
        
//         return await userRepository.update(req, passwordHash)
//     }
// }