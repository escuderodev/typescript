import { Router } from "express"
import { PrismaClient } from "@prisma/client"
import { createDiscipline } from "../controller/Discipline/CreateDisciplineController"
import { getAllDisciplinies } from "../controller/Discipline/GetAllDiscipliniesController"
import { getDisciplineById } from "../controller/Discipline/GetDisciplineByIdController"
import { updateDiscipline } from "../controller/Discipline/UpdateDisciplineController"
import { LoginService } from "../service/User/LoginService"

const prisma = new PrismaClient()

const disciplineRouter = Router()

const loginService = new LoginService()

// criar disciplina
disciplineRouter.post("/disciplinies", loginService.checkToken , createDiscipline)

// // listar todos os disciplina
disciplineRouter.get("/disciplinies", getAllDisciplinies)

// // listar apenas um disciplina
disciplineRouter.get("/disciplinies/:id", getDisciplineById)

// // atualizar disciplina
disciplineRouter.put("/disciplinies/:id", loginService.checkToken, updateDiscipline)

// // deletar disciplina
// disciplineRouter.delete("/disciplinies/:id", loginService.checkToken, deleteUser)

export {disciplineRouter}