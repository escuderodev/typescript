import { Request, Response, Router } from 'express'
import { DisciplineRepositoryInMemory } from "../infra/repository/memory/DisciplineRepositoryInMemory"
import { DisciplineCreateService } from "../services/DisciplineCreateService"
import { DisciplineGetAllService } from "../services/DisciplineGetAllService"
import { DisciplineCreateController } from "../controllers/DisciplineCreateController"
import { DisciplineGetAllController } from "../controllers/DisciplineGetAllController"

const disciplineRouter = Router()

// const repository = new CustomerRepositoryInMemory()
const repository = new DisciplineRepositoryInMemory()

const disciplineCreateService = new DisciplineCreateService(repository)
const disciplineCreateController = new DisciplineCreateController(disciplineCreateService)

// const customerByIdService = new CustomerGetByIdService(repository)
// const customerById = new CustomerById(customerByIdService)

const disciplineGetAllService = new DisciplineGetAllService(repository)
const disciplineGetAllController = new DisciplineGetAllController(disciplineGetAllService)

// const customerRemoveByIdService = new CustomerRemoveByIdService(repository)
// const customerRemoveById = new CustomerRemoveById(customerRemoveByIdService)

// const customerUpdateByIdService = new CustomerUpdateByIdService(repository)
// const customerUpdateById = new CustomerUpdateById(customerUpdateByIdService)

disciplineRouter.post('/disciplinies', (request: Request, response: Response) => {
    disciplineCreateController.execute(request, response)
})

disciplineRouter.get('/disciplinies', (request: Request, response: Response) => {
    disciplineGetAllController.execute(request, response)
})

// disciplineRouter.get('/disciplinies/:id', (request: Request, response: Response) => {
//     customerById.execute(request, response)
// })

// disciplineRouter.put('/disciplinies/:id', (request: Request, response: Response) => {
//     customerUpdateById.execute(request, response)
// })

// disciplineRouter.delete('/disciplinies/:id', (request: Request, response: Response) => {
//     customerRemoveById.execute(request, response)
// })

export { disciplineRouter }