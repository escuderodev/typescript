import { Request, Response } from "express"
import { DeletePostService } from "../../service/Post/DeletePostService"

export const deletePost = async (req: Request, res: Response) => {

    const deletePostService = new DeletePostService()

    try {
        await deletePostService.execute(req)
        return res.status(200).json({message: 'Post deleted!'})
    } catch (error) {
        return res.status(200).json({
            message: `Post Id ${req.params.id} not found!`
          })
    }
}