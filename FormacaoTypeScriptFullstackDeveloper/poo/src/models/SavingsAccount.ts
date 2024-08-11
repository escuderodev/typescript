import { Account } from "./Account";
import { Client } from "./Client";

export class SavingsAccount extends Account {
    private increase: number

    constructor(accountNumber: number, client: Client) {
        super(accountNumber, client)
        this.increase = 5.00        
    }

    deposit(valor: number) {
        this.balance = this.balance + (valor + this.increase)
        console.log(`Deposito no valor de R$ ${valor.toFixed(2)} realizado com sucesso!`)
        console.log(`${this.client.getName()}, o novo saldo da conta ${this.accountNumber} é R$ ${this.balance.toFixed(2)}`)
    }
}