import { Submission } from "../../domain/entities/submission"

type CreateChallengeSubmisisonRequest = {
    studentId: string
    challengeId: string
}

export class CreateChallengeSubmisison {
    execute({studentId, challengeId}: CreateChallengeSubmisisonRequest) {
        const submission = Submission.create({
            studentId,
            challengeId
        })

        return submission
    }
}