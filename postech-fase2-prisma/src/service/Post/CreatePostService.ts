import { Request, Response } from "express"
import { PostRepository } from "../../repository/PostRepository"

export class CreatePostService {

    async execute(req: Request, res: Response) {

        const postRepository = new PostRepository()

        const { title, description, discipline} = req.body

        // validations
    
        // check requireds fields
        if(!title) {
            return res.status(422).json({message: 'title field is required!'})
        }
        if(!description) {
            return res.status(422).json({message: 'description field is required!'})
        }
        if(!discipline    ) {
            return res.status(422).json({message: 'discipline field is required!'})
        }
    
        // create post
        return postRepository.save(title, description, discipline)

    }
}