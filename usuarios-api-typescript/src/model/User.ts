export class User {
    id: string
    name: string
    email: string
    age: string

    constructor(name: string, email: string, age: string) {
        this.name = name
        this.email = email
        this.age = age
    }

    public getId() {
        return this.id
    }

    public getName() {
        return this.name
    }

    public getEmail() {
        return this.email
    }

    public getAge() {
        return this.age
    }
}