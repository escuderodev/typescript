import { Account } from './Account'

export class SavingsAccount extends Account {
    yieldPercentage: number = 5

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    deposit = (value: number): void => {
        this.setBalance(this.getBalance() + (value + ((value * this.yieldPercentage) / 100)))
        console.log(`Você depositou R$ ${value.toFixed(2)} e seu novo saldo é R$ ${this.getBalance().toFixed(2)}`)
    }
}