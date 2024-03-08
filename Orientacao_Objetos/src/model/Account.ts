export abstract class Account {
    name: string
    accountNumber: number
    balance: number = 0

    constructor(name: string, accountNumber: number) {
        this.name = name
        this.accountNumber = accountNumber

    }

    deposit = (value: number) => {
        this.balance += value
        console.log(`Você depositou R$ ${value.toFixed(2)} e seu novo saldo é R$ ${this.balance.toFixed(2)}`)
    }

    withdraw = (value: number) => {
        if(this.balance >= value) {
            this.balance -= value
            console.log(`Você sacou R$ ${value.toFixed(2)} e seu novo saldo é R$ ${this.balance.toFixed(2)}`)
        } else {
            console.log(`Saque não autorizado. Saldo insuficiente! R$ ${this.balance.toFixed(2)}`)
        }
    }

    getBalence = () => {
        console.log(this.balance)
    }
}

