import { Router } from "express"
import { PrismaClient } from "@prisma/client"
import { createDiscipline } from "../controller/Discipline/CreateDisciplineController"
import { getAllDisciplinies } from "../controller/Discipline/GetAllDiscipliniesController"
import { LoginService } from "../service/User/LoginService"

const prisma = new PrismaClient()

const disciplineRouter = Router()

const loginService = new LoginService()

// criar disciplina
disciplineRouter.post("/disciplines", loginService.checkToken , createDiscipline)

// // listar todos os disciplina
disciplineRouter.get("/disciplines", getAllDisciplinies)

// // listar apenas um disciplina
// disciplineRouter.get("/disciplines/:id", getUserById)

// // atualizar disciplina
// disciplineRouter.put("/disciplines/:id", loginService.checkToken, updateUser)

// // deletar disciplina
// disciplineRouter.delete("/disciplines/:id", loginService.checkToken, deleteUser)

export {disciplineRouter}