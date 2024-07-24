import { Request, Response, Router } from 'express'
import { DisciplineRepositoryInMemory } from "../infra/repository/memory/DisciplineRepositoryInMemory"
import { DisciplineCreateService } from "../services/DisciplineCreateService"
import { DisciplineGetAllService } from "../services/DisciplineGetAllService"
import { DisciplineGetByIdService } from "../services/DisciplineGetByIdService"
import { DisciplineUpdateService } from "../services/DisciplineUpdateService"
import { DisciplineDeleteService } from "../services/DisciplineDeleteService"
import { DisciplineCreateController } from "../controllers/DisciplineCreateController"
import { DisciplineGetAllController } from "../controllers/DisciplineGetAllController"
import { DisciplineGetByIdController } from "../controllers/DisciplineGetByIdController"
import { DisciplineUpdateController } from "../controllers/DisciplineUpdateController"
import { DisciplineDeleteController } from "../controllers/DisciplineDeleteController"

const disciplineRouter = Router()

const repository = new DisciplineRepositoryInMemory()

const disciplineCreateService = new DisciplineCreateService(repository)
const disciplineCreateController = new DisciplineCreateController(disciplineCreateService)

const disciplineGetAllService = new DisciplineGetAllService(repository)
const disciplineGetAllController = new DisciplineGetAllController(disciplineGetAllService)

const disciplineGetByIdService = new DisciplineGetByIdService(repository)
const disciplineGetByIdController = new DisciplineGetByIdController(disciplineGetByIdService)

const disciplineUpdateService = new DisciplineUpdateService(repository)
const disciplineUpdateController = new DisciplineUpdateController(disciplineUpdateService)

const disciplineDeleteService = new DisciplineDeleteService(repository)
const disciplineDeleteController = new DisciplineDeleteController(disciplineDeleteService)

disciplineRouter.post('/disciplinies', (request: Request, response: Response) => {
    disciplineCreateController.execute(request, response)
})

disciplineRouter.get('/disciplinies', (request: Request, response: Response) => {
    disciplineGetAllController.execute(request, response)
})

disciplineRouter.get('/disciplinies/:id', (request: Request, response: Response) => {
    disciplineGetByIdController.execute(request, response)
})

disciplineRouter.put('/disciplinies/:id', (request: Request, response: Response) => {
    disciplineUpdateController.execute(request, response)
})

disciplineRouter.delete('/disciplinies/:id', (request: Request, response: Response) => {
    disciplineDeleteController.execute(request, response)
})

export { disciplineRouter }