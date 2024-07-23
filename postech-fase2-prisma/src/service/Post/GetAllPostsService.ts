import { Request } from "express"
import { PostRepository } from "../../repository/PostRepository"

export class GetAllPostsService  {

    async execute(req: Request) {

        const postRepository = new PostRepository()
        return await postRepository.getAll()
    }
}