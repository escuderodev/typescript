import { Account } from "./models/Account"
import { Client } from "./models/Client"

const eduardo: Client = new Client("Eduardo Escudero", 40)
const carol: Client = new Client("Carol Tobias", 41)
const clients: Array<Client> = []
clients.push(eduardo, carol)

// console.log(clients)
// console.log(clients[0])
// console.log(eduardo.getName())
// console.log(carol.getAge())

const account: Account = new Account(35214, eduardo)
// console.log(account)
// console.log(account.getClient().getName())

account.deposit(1000)
account.withdraw(1001)