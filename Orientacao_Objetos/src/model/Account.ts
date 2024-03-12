export abstract class Account {
    private name: string
    private accountNumber: number
    private balance: number = 0

    constructor(name: string, accountNumber: number) {
        this.name = name
        this.accountNumber = accountNumber

    }

    deposit = (value: number): void => {
        this.balance += value
        console.log(`Você depositou R$ ${value.toFixed(2)} e seu novo saldo é R$ ${this.balance.toFixed(2)}`)
    }

    withdraw = (value: number): void => {
        if(this.balance >= value) {
            this.balance -= value
            console.log(`Você sacou R$ ${value.toFixed(2)} e seu novo saldo é R$ ${this.balance.toFixed(2)}`)
        } else {
            console.log(`Saque não autorizado. Saldo insuficiente! R$ ${this.balance.toFixed(2)}`)
        }
    }

    getName = (): string => {
        return this.name
    }

    setName = (name: string) => {
        this.name = name
    }

    getAccountNumber = (): number => {
        return this.accountNumber
    }

    setAccountNumber = (accountNumber: number) => {
        this.accountNumber = accountNumber
    }

    getBalance = (): number => {
        return this.balance
    }

    setBalance = (balance:  number) => {
        this.balance = balance
    }
}

