import { Entity } from "./core/domain/entity";

type ChallengeProps = {
    title: string
    instructionsUrl: string
}

export class Challenge extends Entity<ChallengeProps> {
    private constructor(props: ChallengeProps, id?: string) {
        super(props, id)
    }

    static create(props: ChallengeProps, id?: string) {
        const challenge = new Challenge(props, id)
        return challenge
    }
}

// Paramos aos 36:38 de https://www.youtube.com/watch?v=mjBsii0eiuI