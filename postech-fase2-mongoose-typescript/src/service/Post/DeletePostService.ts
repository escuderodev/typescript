import { Request } from "express"
import { PostRepository } from "../../database/repository/PostRepository"

export class DeletePostService  {

    async execute(req: Request) {
        const postRepository = new PostRepository()
        return postRepository.delete(req)
    }
}