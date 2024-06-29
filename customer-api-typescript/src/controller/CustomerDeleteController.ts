import { Request, Response } from "express"
import { CustomerRepository } from "../repository/CustomerRepository";
import { Customer } from "../model/Customer";
import { Uuid } from "../model/Uuid"

export class CustomerDeleteController {

    constructor(readonly repository: CustomerRepository) {  
    }

    async execute(req: Request, res: Response) {
        const id = new Uuid(req.params.id)
        await this.repository.delete(id)
        res.status(200).json({message: 'Customer deleted!'})
    }
}