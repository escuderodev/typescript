import { Request, Response } from "express"
import { CustomerUpdateByIdService } from "../services/CustomerUpdateByIdService"

export class CustomerUpdateById {

    constructor(readonly service: CustomerUpdateByIdService) {
    }

    async execute(request: Request, response: Response) {
        const { id } = request.params
        const { name, document } = request.body

        try {
            const customer = await this.service.execute(id, name, document)
            response.status(200).json({customer})
        } catch (error) {
            response.status(200).json({message: `Customer id ${id} not found!`})
        }
    }
}
