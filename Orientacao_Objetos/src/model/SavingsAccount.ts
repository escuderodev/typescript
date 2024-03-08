import { Account } from './Account'

export class SavingsAccount extends Account {
    yieldPercentage: number = 5

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    getBalence = () => {
        console.log(this.balance)
    }

    deposit = (value: number) => {
        this.balance += value + ((value * this.yieldPercentage) / 100)
        console.log(`Você depositou R$ ${value.toFixed(2)} e seu novo saldo é R$ ${this.balance.toFixed(2)}`)
    }
}