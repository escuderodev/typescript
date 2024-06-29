import { Request, Response, Router } from "express"
import { CustomerInMemory } from "./infra/dataBase/CustomerInMemory"
import { CustomerListController } from "./controller/CustomerListController"
import { CustomerCreateController } from "./controller/CustomerCreateController"
import { CustomerInDataBase } from "./infra/dataBase/CustomerInDataBase"
import { CustomerGetByIdController } from "./controller/CustomerGetByIdController"

const router = Router()

// select database
// const repository = new CustomerInMemory()
const repository = new CustomerInDataBase()

const customerList = new CustomerListController(repository)
const customerById = new CustomerGetByIdController(repository)
const customerCreate = new CustomerCreateController(repository)

router.get("/customer", (req: Request, res: Response) => {
    customerList.execute(req, res)
})

router.get("/customer/:id", (req: Request, res: Response) => {
    customerById.execute(req, res)
})

router.post("/customer", (req: Request, res: Response) => {
    customerCreate.execute(req, res)
})

export { router }

// Paramos na aula: https://www.youtube.com/watch?v=SO0hjalCVkI&list=PLrnHpYM1USWz9JMdtsbpPDYDNUuP_cpK_&index=4&ab_channel=andrevitor103