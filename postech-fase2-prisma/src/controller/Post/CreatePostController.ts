import { Request, Response } from "express"
import { CreatePostService } from "../../service/Post/CreatePostService"

export const createPost = async (req: Request, res: Response) => {

    const createPostService = new CreatePostService()
    const post = await createPostService.execute(req, res)
    return res.status(201).json({
        message: "create post is success!",
        post: post
    })
}