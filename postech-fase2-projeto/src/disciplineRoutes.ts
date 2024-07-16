import { Router } from "express"
import { PrismaClient } from "@prisma/client"
import { createDiscipline } from "./controller/Discipline/CreateDisciplineController"

const prisma = new PrismaClient()

const disciplineRouter = Router()

// criar disciplina
disciplineRouter.post("/disciplines", createDiscipline)

// // listar todos os disciplina
// disciplineRouter.get("/disciplines", getAllUsers)

// // listar apenas um disciplina
// disciplineRouter.get("/disciplines/:id", getUserById)

// // atualizar disciplina
// disciplineRouter.put("/disciplines/:id", loginService.checkToken, updateUser)

// // deletar disciplina
// disciplineRouter.delete("/disciplines/:id", loginService.checkToken, deleteUser)

export {disciplineRouter}