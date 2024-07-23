import { Router } from "express"
import { createDiscipline } from "../controller/Discipline/CreateDisciplineController"
import { deleteDiscipline } from "../controller/Discipline/DeleteDisciplineController"
import { getAllDisciplinies } from "../controller/Discipline/GetAllDiscipliniesController"
import { getDisciplineById } from "../controller/Discipline/GetDisciplineByIdController"
import { updateDiscipline } from "../controller/Discipline/UpdateDisciplineController"
import { LoginService } from "../service/User/LoginService"

const disciplineRouter = Router()

const loginService = new LoginService()

// criar task
disciplineRouter.post("/disciplinies", loginService.checkToken, createDiscipline)

// // listar todos as tasks
disciplineRouter.get("/disciplinies", getAllDisciplinies)

// // listar apenas uma task
disciplineRouter.get("/disciplinies/:id", getDisciplineById)

// // atualizar task
disciplineRouter.put("/disciplinies/:id", loginService.checkToken, updateDiscipline)

// // deletar task
disciplineRouter.delete("/disciplinies/:id", loginService.checkToken, deleteDiscipline)

export { disciplineRouter }