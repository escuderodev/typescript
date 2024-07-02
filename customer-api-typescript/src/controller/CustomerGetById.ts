import { Request, Response } from "express"
import { CustomerGetByIdService } from "../services/CustomerGetByIdService"

export class CustomerById {

    constructor(readonly service: CustomerGetByIdService) {
    }

    async execute(request: Request, response: Response) {
        let id: string = request.params.id
        
        try {
            const customer = await this.service.execute(id)
            response.status(200).json({customer})
        } catch (error) {
            response.status(200).json({message: `Customer id ${id} not found!`})
        }
    }
}
