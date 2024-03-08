import { Account } from './Account'

export class CurrentAccount extends Account {

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }
}