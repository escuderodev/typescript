import { Request, Response } from "express"
import { CustomerRepository } from "../repository/CustomerRepository";
import { Customer } from "../model/Customer";
import { CustomerDTO } from "../model/CustomerDTO";
import { Uuid } from "../model/Uuid"

export class CustomerUpdateController {

    constructor(readonly repository: CustomerRepository) {  
    }

    async execute(req: Request, res: Response) {
        const { id } = req.params
        const { name, document } = req.body
        let customer = Customer.createCustomer(name, document, id)
        const customerDTO = new CustomerDTO(customer.getName(), customer.getDocument().getValue())
        customer = await this.repository.update(customer.getId(), customerDTO)
        res.status(200).json({customer})
    }
}