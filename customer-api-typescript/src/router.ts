import { Request, Response, Router } from "express"
import { CustomerInMemory } from "./infra/dataBase/CustomerInMemory"
import { CustomerListController } from "./controller/CustomerListController"
import { CustomerCreateController } from "./controller/CustomerCreateController"
import { CustomerInDataBase } from "./infra/dataBase/CustomerInDataBase"

const router = Router()
const repository = new CustomerInDataBase()
const customerList = new CustomerListController(repository)
const customerCreate = new CustomerCreateController(repository)

router.get("/customer", (req: Request, res: Response) => {
    customerList.execute(req, res)
})

router.post("/customer", (req: Request, res: Response) => {
    customerCreate.execute(req, res)
})

export { router }