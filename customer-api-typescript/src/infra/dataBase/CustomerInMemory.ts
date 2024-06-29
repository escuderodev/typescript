import { Customer } from "../../model/Customer";
import { Uuid } from "../../model/Uuid";
import { CustomerRepository } from "../../repository/CustomerRepository";

export class CustomerInMemory implements CustomerRepository {
    delete(id: Uuid): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getById(id: Uuid): Promise<Customer> {
        throw new Error("Method not implemented.");
    }

    private customerCollection: Array<Customer> = []

    async getAll(): Promise<Array<Customer>> {
        return this.customerCollection
    }

    async save(customer: Customer): Promise<void> {
        this.customerCollection.push(customer)           
    }

}