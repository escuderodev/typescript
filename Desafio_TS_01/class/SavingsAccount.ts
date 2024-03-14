import { DioAccount } from "./DioAccount";

export class SavingsAccount extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    deposit = (valor: number): void => {
        if(this.validateStatus()){
          this.balance += (valor + 10)
          console.log(`Você depositou R$ ${valor.toFixed(2)} e seu novo saldo é R$ ${this.balance.toFixed(2)}`)
        }
    }
}

