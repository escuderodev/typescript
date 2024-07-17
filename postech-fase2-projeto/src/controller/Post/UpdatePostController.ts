import { Request, Response } from "express"
import { UpdatePostService } from "../../service/Post/UpdatePostService"

export const updatePost = async (req: Request, res: Response) => {

    const updatePostService = new UpdatePostService()

    try {
        const post = await updatePostService.execute(req, res)
        return res.status(200).json(post)
    } catch (error) {
        return res.status(200).json({
            message: `Post Id ${req.params.id} not found!`
          })
    }
}