abstract class Account {
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

class CurrentAccount extends Account {

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }
}

class SavingsAccount extends Account {
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

console.log('\n=== conta corrente ===')
const currentAccount: CurrentAccount = new CurrentAccount('Eduardo', 12345)
console.log(`Cliente: ${currentAccount.name} | Conta: ${currentAccount.accountNumber} | Saldo R$: ${currentAccount.balance.toFixed(2)}`)
currentAccount.deposit(100)
currentAccount.withdraw(50)

console.log('\n=== conta poupança ===')
const savingsAccount: SavingsAccount = new SavingsAccount('Carol', 54321)
console.log(`Cliente: ${savingsAccount.name} | Conta: ${savingsAccount.accountNumber} | Saldo R$: ${savingsAccount.balance.toFixed(2)}`)
savingsAccount.deposit(100)
savingsAccount.withdraw(50)