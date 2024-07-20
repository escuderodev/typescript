import { Router } from "express"
import { createDiscipline } from "../controller/Discipline/CreateDisciplineController"
import { deleteDiscipline } from "../controller/Discipline/DeleteDisciplineController"
import { getAllDisciplinies } from "../controller/Discipline/GetAllDiscipliniesController"
import { getDisciplineById } from "../controller/Discipline/GetDisciplineByIdController"
import { updateDiscipline } from "../controller/Discipline/UpdateDisciplineController"
import { LoginService } from "../service/User/LoginService"

const postRouter = Router()

const loginService = new LoginService()

// criar task
postRouter.post("/disciplinies", loginService.checkToken, createDiscipline)

// // listar todos as tasks
postRouter.get("/disciplinies", getAllDisciplinies)

// // listar apenas uma task
postRouter.get("/disciplinies/:id", getDisciplineById)

// // atualizar task
postRouter.put("/disciplinies/:id", loginService.checkToken, updateDiscipline)

// // deletar task
postRouter.delete("/disciplinies/:id", loginService.checkToken, deleteDiscipline)

export { postRouter }