import { Client } from "./Client"

export abstract class Account {
    protected accountNumber: number
    protected client: Client
    protected balance: number

    constructor(accountNumber: number, client: Client) {
        this.accountNumber = accountNumber
        this.client = client
        this.balance = 0
    }

    getAccountNumber() {
        return this.accountNumber
    }

    getClient() {
        return this.client
    }

    getBalance() {
        return this.balance.toFixed(2)
    }

    deposit(valor: number) {
        this.balance = this.balance + valor
        console.log(`Deposito no valor de R$ ${valor.toFixed(2)} realizado com sucesso!`)
        console.log(`${this.client.getName()}, o novo saldo da conta ${this.accountNumber} é R$ ${this.balance.toFixed(2)}`)
    }

    withdraw(valor: number) {
        if(valor <= this.balance) {
            this.balance = this.balance - valor
            console.log(`Saque no valor de R$ ${valor.toFixed(2)} realizado com sucesso!`)
            console.log(`${this.client.getName()}, o novo saldo da conta ${this.accountNumber} é R$ ${this.balance.toFixed(2)}`)
        } else {
            console.log("saldo insuficiente!")
        }
    }
}