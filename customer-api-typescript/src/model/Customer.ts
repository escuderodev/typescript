import { Document } from "./Document"
import { DocumentFactory } from "./DocumentFactory"
import { Uuid } from "./Uuid"

export class Customer {
    private id: Uuid
    private name: string
    private document: Document

    constructor(id: Uuid, name: string, document: Document) {
        this.id = id
        this.name =  name
        this.document = document
    }

    static createCustomer(id: string, name: string, document: string) {
        const uuid = new Uuid(id)
        const documentInstance = DocumentFactory.createDocument(document)

        return new Customer(uuid, name, documentInstance)
    }
}