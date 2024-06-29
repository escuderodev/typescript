import { Request, Response } from "express"
import { CustomerRepository } from "../repository/CustomerRepository"
import { Uuid } from "../model/Uuid"

export class CustomerGetByIdController {

    constructor(readonly repository: CustomerRepository) {  
    }

    async execute(req: Request, res: Response) {
        const id = new Uuid(req.params.id)
        const customer = await this.repository.getById(id)
        res.status(200).json({customer})
    }
}