// =====  variáveis ===== 
// var a: string = 'a' // global
// let b: string = 'b' // escopo
// const c: string = 'c' // constante

// console.log(a,b,c)

// const nome: string = 'Eduardo'
// const sobrenome: string = 'Escudero'
// const idade: number = 39
// let situacao: boolean = true

// console.log(`Meu nome é ${nome} ${sobrenome} e tenho ${idade} anos. Será que eu estou ativo no curso? ${situacao}`)

// ===== objetos ===== 

// // definindo os tipos dos atributos de um objeto via interface
// interface Pessoa {
//     nome: string,
//     idade: number,
//     profissao?: string //o ? indica opcional
// }

// // declarando um objeto respeitando os tipos da interface
// const pessoa: Pessoa = {
//     nome: 'Eduardo',
//     idade: 39
// }

// const outraPessoa: Pessoa = {
//     nome: 'Carol',
//     idade: 40,
//     profissao: 'Confeiteira'
// }

// const arrayPessoa: Array<Pessoa> = [pessoa, outraPessoa]
// console.log(arrayPessoa)

// const arrayNumerico: Array<number> = [1,2,3]
// console.log(arrayNumerico)

// ===== estrutura de decisão e repetição ===== 
// const numero: number = 15

// if(numero > 15) {
//     console.log(`Número ${numero} é maior que 15`)
// } else if(numero === 15) {
//     console.log(`Número ${numero} é igual à 15`)
// } else {
//     console.log(`Número ${numero} é menor que 15`)
// }

// encadeamento de decisão
// const complementoDaMovimentacao: boolean = true
// const advogadoMarcado: boolean = true
// const parteReveuMarcada: boolean = false

// if(complementoDaMovimentacao) {
//     if(advogadoMarcado) {
//         console.log('Publica no DJE')
//     } else if(parteReveuMarcada) {
//         console.log('Publica no DJE')
//     } else {
//         console.log('Não possui advogado ou partes marcados então Não Publica')
//     }
// } else {
//     console.log('Não possui complemento da movimentação então Não Publica')
// }

// const typeUser = {
//     admin: 'você é um admin',
//     student: 'você é um estudante',
//     viewer: 'você é um espectador'
// }

// function validateUser(user: string) {
//     console.log(typeUser[user as keyof typeof typeUser])
// }

// const usuario = 'admin'

// validateUser(usuario)

// ==== estrutura de repetição ====
// console.log('\n === for ===')
// console.log('=== tabuada ===')
// const multiplicador: number = 4

// for(let i=0; i<11; i++) {
//     console.log(`${multiplicador} X ${i} = ${i * multiplicador}`)
// }

// console.log('\n === while ===')
// let contador = 1
// while(contador < 11) {
//     console.log(contador)
//     contador++
// }

// ===== array =====
const numbers: number[] = [1,2,3,4]
const strings: string[] = ['eduardo','carol','juan','alicia']

// selecionando uma posição do array
console.log(numbers[1])

// verificando o tamanho de um array
console.log('Tamanho do array: ' + numbers.length)

// imprimindo o array original
console.log('Numeros: ' + numbers)

// adicionando elemento no array
numbers.push(5)
console.log('Numeros: ' + numbers)

// removendo o último elemento do array
numbers.pop()
console.log('Numeros: ' + numbers)

// procurando elemento dentro do array - obs: retorna o primeiro item do array que atenda a regra de pesquisa
// const pesquisaNumero: number | undefined = numbers.find(num => num === 3)
// console.log(pesquisaNumero)

// foreach
console.log('\n= foreach =')
numbers.forEach(num => console.log('Número: ',num))

console.log('\n= pesquisando numeros maiores que 2 =')
numbers.forEach(num => {
    if(num > 2) {
        console.log(num)
    }
})

// map
console.log('\n= map =')
numbers.map(num => console.log(num))

// forEach e map são semelhantes e divergem em desempenho, porém quando for utilizar função assincrona, devemos utilizar o map
