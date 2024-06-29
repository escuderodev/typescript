import { Request, Response, Router } from "express"
import { CustomerInMemory } from "./infra/dataBase/CustomerInMemory"
import { CustomerCreate } from "./controller/CustomerCreateController"

const router = Router()
const repository = new CustomerInMemory()
const customerCreate = new CustomerCreate(repository)

// router.post("/customer", (req: Request, res: Response) => {
//     customerCreate.execute(req, res)
// })

router.post("/customer", (req: Request, res: Response) => {
    customerCreate.execute(req, res)
})

export { router }