import { Entity } from "./core/domain/entity";

type ChallengeProps = {
    title: string
    instructionsUrl: string
}

class Challenge extends Entity<ChallengeProps> {
    private constructor(props: ChallengeProps, id?: string) {
        super(props, id)
    }

    public create(props: ChallengeProps, id?: string) {
        const challenge = new Challenge(props, id)
        return challenge
    }
}

// paramos em: https://www.youtube.com/watch?v=mjBsii0eiuI