// // variáveis
// var a: string = 'a' // global
// let b: string = 'b' // escopo
// const c: string = 'c' // constante

// console.log(a,b,c)

// const nome: string = 'Eduardo'
// const sobrenome: string = 'Escudero'
// const idade: number = 39
// let situacao: boolean = true

// console.log(`Meu nome é ${nome} ${sobrenome} e tenho ${idade} anos. Será que eu estou ativo no curso? ${situacao}`)

// objetos

// definindo os tipos dos atributos de um objeto via interface
interface Pessoa {
    nome: string,
    idade: number,
    profissao?: string //o ? indica opcional
}

// declarando um objeto respeitando os tipos da interface
const pessoa: Pessoa = {
    nome: 'Eduardo',
    idade: 39
}

const outraPessoa: Pessoa = {
    nome: 'Carol',
    idade: 40,
    profissao: 'Confeiteira'
}

const arrayPessoa: Array<Pessoa> = [pessoa, outraPessoa]
console.log(arrayPessoa)

const arrayNumerico: Array<number> = [1,2,3]
console.log(arrayNumerico)