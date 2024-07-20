import { Request } from "express"
import Post from "../model/Post"

export class PostRepository {
    async save(req: Request) {
        const { title, description } = req.body

        const post = {
            title: title,
            description: description
        }
        const newPost = await Post.create(post)
        return newPost
    }

    async getAll() {
        return await Post.find()
    }

    async getById(id: string) {
        return await Post.findById(id)
    }

    async update(req: Request) {

        const id = req.params.id
        const { title } = req.body

        const discipline = {
            id: id,
            title: title,
            updatedAt: Date.now()
        }
        return await Post.updateOne({_id: id}, discipline)
    }

    async delete(req: Request) {
        const id = req.params.id
        return await Post.deleteOne({_id: id})
    }
}