import { Customer } from "../model/Customer"
import { Uuid } from "../model/Uuid"

export interface CustomerRepository {

    save(customer: Customer): Promise<void>
    getAll(): Promise<Array<Customer>>
    getById(id: Uuid): Promise<Customer>
    // update(id: Uuid): Promise<Customer>
    delete(id: Uuid): Promise<void>
}