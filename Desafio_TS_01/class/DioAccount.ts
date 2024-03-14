export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  extract = (): void => {
    console.log(`O saldo atual da conta ${this.accountNumber} é R$ ${this.balance.toFixed(2)}`)
  }

  deposit = (valor: number): void => {
    if(this.validateStatus()){
      this.balance += valor
      console.log(`Você depositou R$ ${valor.toFixed(2)} e seu novo saldo é R$ ${this.balance.toFixed(2)}`)
    }
  }

  withdraw = (valor: number): void => {
    if(this.validateStatus()){
      if(this.balance >= valor){
        this.balance -= valor
        console.log(`Você sacou R$ ${valor.toFixed(2)} e seu novo saldo é R$ ${this.balance.toFixed(2)}`)
      }
    } else{
      console.log('Saldo insuficiente!')
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  getAccountNumber = (): number =>{
    return this.accountNumber
  }

  readonly validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
