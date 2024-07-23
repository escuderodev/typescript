import { Request } from "express"
import { PostRepository } from "../../repository/PostRepository"

export class DeletePostService  {

    async execute(req: Request) {
        const postRepository = new PostRepository()
        return postRepository.delete(req)
    }
}