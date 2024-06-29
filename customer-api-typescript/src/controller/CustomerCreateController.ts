import { Request, Response } from "express"
import { CustomerRepository } from "../repository/CustomerRepository";
import { Customer } from "../model/Customer";

export class CustomerCreate {

    constructor(readonly repository: CustomerRepository) {  
    }

    async execute(req: Request, res: Response) {
        const { name, document } = req.body
        const customer = Customer.createCustomer(name, document)
        await this.repository.save(customer)
        res.status(201).json({customer})
    }
}