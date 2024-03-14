import { SavingsAccount } from './class/SavingsAccount'
import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'


console.log('\n=== peopleAccount ===')

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.extract()
peopleAccount.deposit(100.00)
peopleAccount.withdraw(50.00)
peopleAccount.extract()

console.log('\n=== companyAccount ===')

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.extract()
companyAccount.deposit(100.00)
companyAccount.getLoan(200.00)
companyAccount.extract()

console.log('\n=== SavingsAccount ===')

const savingsAccount: SavingsAccount = new SavingsAccount('Pedro', 30)
savingsAccount.extract()
savingsAccount.deposit(50.00)
savingsAccount.extract()