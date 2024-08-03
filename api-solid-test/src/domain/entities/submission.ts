import { Entity } from "./core/domain/entity";

type SubmisisonProps = {
    challengeId: string
    studentId: string
    createdAt: Date
}

class Submission extends Entity<SubmisisonProps> {
    private constructor(props: SubmisisonProps, id?: string) {
        super(props, id)
    }

    static create(props: SubmisisonProps, id?: string) {
        const submission = new Submission(props, id)
        return submission
    }
}