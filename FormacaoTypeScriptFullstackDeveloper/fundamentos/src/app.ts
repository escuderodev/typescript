console.log("=== criando interface e objetos ===")
interface Pessoa {
    name: string
    age: number
    profession?: string
}

const eduardo: Pessoa = {
    name: "Eduardo",
    age: 40,
    profession: "Dev"
}

const carol: Pessoa = {
    name: "Carol",
    age: 41
}

console.log(`Pessoa 1 = Nome: ${eduardo.name} | Idade: ${eduardo.age} | Profissão: ${eduardo.profession}`)
console.log(`Pessoa 1 = Nome: ${carol.name} | Idade: ${carol.age}`)

console.log("\n === trabalhando com arrays ===")
const pessoas: Array<Pessoa> = [eduardo, carol]
console.log(pessoas)

console.log("\n=== estruturas de decisão ===")
if(eduardo.age > 18) {
    console.log(`${eduardo.name} tem ${eduardo.age} anos e é maior de idade!`)
} else {
    console.log(`${eduardo.name} tem ${eduardo.age} anos e é menor de idade!`)
}

console.log("\n=== estrutura de repetição for ===")
for(let i = 0; i < pessoas.length; i++) {
    console.log(`Pessoa ${i}: ${pessoas[i].name}`)
}

console.log("\n=== estrutura de repetição forEach ===")
pessoas.forEach((pessoa) => {
    console.log(pessoa.name)
})

console.log("\n=== estrutura de repetição while ===")
let i = 0
while(i <= 10) {
    console.log(`Número: ${i}`)
    i++
}

console.log("\n=== pesquisando em array ===")
const numeros: Array<number> = [1,2,3,4,5,6,7,8,9,10]
const numeroPesquisado = numeros.find(num => num === 10)
console.log(`Número pesquisado é ${numeroPesquisado}`)
numeros.forEach(num => console.log(num))
numeros.forEach((num) => {
    if(num > 5) {
        console.log(num)
    }
})