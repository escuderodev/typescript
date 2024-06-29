import knex, { Knex } from "knex"
import { Customer } from "../../model/Customer"
import { CustomerRepository } from "../../repository/CustomerRepository"
import { development } from "./KnexConfig"

export class CustomerInDataBase implements CustomerRepository {

    private connection: Knex

    constructor() {
        this. connection = knex(development)
    }

    async save(customer: Customer): Promise<void> {
        await this.connection('customers').insert({
            'id': customer.getId().getValue(),
            'name': customer.getName(),
            'document': customer.getDocument().getValue()
        })
    }

    async getAll(): Promise<Array<Customer>> {
        const customerCollection: Array<Customer> = []
        const customers = await this.connection('customers').select('*')

        for(let i = 0; i < customers.length; i++) {
            const customer = customers[i]
            const name = customer['name']
            const document = customer['document']
            const id = customer['id']
            customerCollection.push(Customer.createCustomer(name, document, id))
        }
        return customerCollection
    }
}