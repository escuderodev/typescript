import { Document } from "./Document";

export class Cpf implements Document {

    private value: string

    constructor(value:string) {
        if(!Cpf.isValid(value)) {
            throw new Error(`Cpf ${value} not is valid!`)
        }

        this.value = value
    }

    static isValid(value: string) {
        return value.length == 11
    }

    getDocument(): Document {
        return this
    }
    getValue(): string {
        return this.value
    }

}