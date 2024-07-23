import { Uuid } from "./Uuid"

export class Discipline {
    private id: Uuid
    private title: string

    constructor(title: string, id?: string) {
        this.id = id ? new Uuid(id) : Uuid.randomGenerator()
        this.title = title
    }

    static create(title: string, id?: string): Discipline {
        return new Discipline(title, id)
    }

    public getId() {
        return this.id
    }

    public getTitle() {
        return this.title
    }
}