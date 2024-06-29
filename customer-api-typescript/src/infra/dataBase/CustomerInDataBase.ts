import knex, { Knex } from "knex"
import { Customer } from "../../model/Customer"
import { CustomerRepository } from "../../repository/CustomerRepository"
import { development } from "./KnexConfig"
import { Uuid } from "../../model/Uuid"

export class CustomerInDataBase implements CustomerRepository {

    private connection: Knex

    constructor() {
        this. connection = knex(development)
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

    async getById(id: Uuid): Promise<Customer> {
        const customer: any = await this.connection('customers').select('*').where({'id': id.getValue()}).limit(1)
        if (!customer) {
            throw new Error(`Customer ${id.getValue()} not found`)
        }
        return Customer.createCustomer(customer[0]['name'], customer[0]['document'], customer[0]['id'])
    }

    async save(customer: Customer): Promise<void> {
        await this.connection('customers').insert({
            'id': customer.getId().getValue(),
            'name': customer.getName(),
            'document': customer.getDocument().getValue()
        })
    }
}