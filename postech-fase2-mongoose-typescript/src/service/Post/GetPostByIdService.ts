import { Request } from "express"
import { PostRepository } from "../../repository/PostRepository"

export class GetPostByIdService  {

    async execute(req: Request) {
        const postRepository = new PostRepository()
        const id = req.params.id
        return await postRepository.getById(id)
    }
}