import crypto from "crypto"

export abstract class Entity<T> {
    protected props: T
    public _id: string

    constructor(props: T, id?: string) {
        this.props = props
        this._id = id ?? crypto.randomUUID()
    }

    get id() {
        return this._id
    }
}