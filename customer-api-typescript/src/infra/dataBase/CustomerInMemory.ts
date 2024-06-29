import { Customer } from "../../model/Customer";
import { CustomerDTO } from "../../model/CustomerDTO";
import { Uuid } from "../../model/Uuid";
import { CustomerRepository } from "../../repository/CustomerRepository";

export class CustomerInMemory implements CustomerRepository {

    private customerCollection: Array<Customer> = []

    async getAll(): Promise<Array<Customer>> {
        return this.customerCollection
    }

    async getById(id: Uuid): Promise<Customer> {
        throw new Error("Method not implemented.");
    }

    async save(customer: Customer): Promise<void> {
        this.customerCollection.push(customer)           
    }

    update(id: Uuid, newCustomer: CustomerDTO): Promise<Customer> {
        throw new Error("Method not implemented.");
    }

    delete(id: Uuid): Promise<void> {
        throw new Error("Method not implemented.");
    }

}