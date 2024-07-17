import { Router } from "express"
import { PrismaClient } from "@prisma/client"
import { createPost } from "../controller/Post/CreatePostController"
import { getAllPosts } from "../controller/Post/GetAllPostsController"
import { LoginService } from "../service/User/LoginService"

const prisma = new PrismaClient()

const postRouter = Router()

const loginService = new LoginService()

// criar post
postRouter.post("/posts/", loginService.checkToken , createPost)

// listar todos os post
postRouter.get("/posts", getAllPosts)

// // listar apenas um post
// postRouter.get("/posts/:id", getDisciplineById)

// // // atualizar post
// postRouter.put("/posts/:id", loginService.checkToken, updateDiscipline)

// // // deletar post
// postRouter.delete("/posts/:id", loginService.checkToken, deleteDiscipline)

export {postRouter}