import { Request } from "express"
import { PostRepository } from "../../repository/PostRepository"

export class GetPostByIdService  {

    async execute(req: Request) {

        const postRepository = new PostRepository()
        return await postRepository.getById(req)
    }
}