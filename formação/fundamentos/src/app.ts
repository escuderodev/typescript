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

const pessoas: Array<Pessoa> = [eduardo, carol]
console.log(pessoas)