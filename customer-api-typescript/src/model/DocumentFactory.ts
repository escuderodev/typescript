import { Cnpj } from "./Cnpj";
import { Cpf } from "./CPF";
import { Document } from "./Document";

export class DocumentFactory {

    static createDocument(value: string): Document {
        if(Cpf.isValid(value)) {
            return new Cpf(value)
        }

        if (Cnpj.isValid(value)) {
            return new Cnpj(value)
        } 

        throw new Error(`Value ${value} is not document valid!`)
    }
}