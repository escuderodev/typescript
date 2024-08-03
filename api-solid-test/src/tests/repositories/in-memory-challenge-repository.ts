import { ChallengeRepository } from "../../application/repositories/ChallengesRepository ";
import { Challenge } from "../../domain/entities/challenge";

export class InMemoryChallengeRepository implements ChallengeRepository {
    public challenges: Challenge[] = []

    async findById(id: string): Promise<Challenge | null> {
        const challenge = this.challenges.find(challenge => challenge._id === id)

        if(!challenge) {
            return null
        }

        return challenge
    }

}