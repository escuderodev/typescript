import { Person } from "./models/Person"

const eduardo = new Person("Eduardo Escudero", 40)
const carol = new Person("Carol Tobias", 41)
const persons: Array<Person> = []
persons.push(eduardo, carol)

console.log(persons)
console.log(eduardo.getName())
console.log(carol.getAge())