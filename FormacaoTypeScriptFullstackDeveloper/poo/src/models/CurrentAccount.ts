import { Account } from "./Account";
import { Client } from "./Client";

export class CurrentAccount extends Account {
    private drawalFee: number

    constructor(accountNumber: number, client: Client) {
        super(accountNumber, client)
        this.drawalFee = 5.00        
    }

    withdraw(valor: number) {
        const valorWithDrawalFee = valor + this.drawalFee
        if(valorWithDrawalFee <= this.balance) {
            this.balance = this.balance - valorWithDrawalFee
            console.log(`Saque no valor de R$ ${valor.toFixed(2)} realizado com sucesso!`)
            console.log(`${this.client.getName()}, o novo saldo da conta ${this.accountNumber} é R$ ${this.balance.toFixed(2)}`)
        } else {
            console.log("saldo insuficiente!")
        }
    }
}