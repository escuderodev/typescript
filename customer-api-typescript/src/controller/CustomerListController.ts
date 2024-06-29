import { Request, Response } from "express"
import { CustomerRepository } from "../repository/CustomerRepository"

export class CustomerListController {

    constructor(readonly repository: CustomerRepository) {  
    }

    async execute(req: Request, res: Response) {
        const customers = await this.repository.getAll()
        res.status(200).json({customers})
    }
}