import { Client } from "./models/Client"
import { CurrentAccount } from "./models/currentAccount"
import { SavingsAccount } from "./models/savingsAccount"

const eduardo: Client = new Client("Eduardo Escudero", 40)
const carol: Client = new Client("Carol Tobias", 41)
const clients: Array<Client> = []
clients.push(eduardo, carol)

// console.log(clients)
// console.log(clients[0])
// console.log(eduardo.getName())
// console.log(carol.getAge())

const currentAccount: CurrentAccount = new CurrentAccount(12345, eduardo)
const savingsAccount: SavingsAccount = new SavingsAccount(67890, eduardo)

// currentAccount.deposit(1000)
// currentAccount.withdraw(500)

savingsAccount.deposit(1000)
savingsAccount.withdraw(500)