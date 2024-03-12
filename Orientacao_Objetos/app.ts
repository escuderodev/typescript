import { CurrentAccount } from "./src/model/CurrentAccount"
import { SavingsAccount } from "./src/model/SavingsAccount"

console.log('\n=== conta corrente ===')
const currentAccount: CurrentAccount = new CurrentAccount('Eduardo', 12345)
console.log(`Cliente: ${currentAccount.getName()} | Conta: ${currentAccount.getAccountNumber()} | Saldo R$: ${currentAccount.balance.toFixed(2)}`)
currentAccount.deposit(100)
currentAccount.withdraw(50)

console.log('\n=== conta poupança ===')
const savingsAccount: SavingsAccount = new SavingsAccount('Carol', 54321)
console.log(`Cliente: ${savingsAccount.getName()} | Conta: ${savingsAccount.getAccountNumber()} | Saldo R$: ${savingsAccount.balance.toFixed(2)}`)
savingsAccount.deposit(100)
savingsAccount.withdraw(50)

console.log('\n=== testando os métodos get com retorno ===')
console.log(currentAccount.getName())
console.log(currentAccount.getAccountNumber())
console.log(currentAccount.getBalance())