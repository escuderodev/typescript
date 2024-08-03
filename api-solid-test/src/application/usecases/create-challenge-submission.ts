import { Submission } from "../../domain/entities/submission"
import { ChallengeRepository } from "../repositories/ChallengesRepository "
import { StundentRepository } from "../repositories/StudentsRepository"

type CreateChallengeSubmissionRequest = {
    studentId: string
    challengeId: string
}

export class CreateChallengeSubmission {

    constructor(
        private studentRepository: StundentRepository,
        private challengeRepository: ChallengeRepository
    ){}

    async execute({studentId, challengeId}: CreateChallengeSubmissionRequest) {
        
        const student = await this.studentRepository.findById(studentId)

        if(!student) {
            throw new Error("Student not found!")
        }

        const challenge = await this.challengeRepository.findById(challengeId)

        if(!challenge) {
            throw new Error("Challenge not found!")
        }

        const submission = Submission.create({
            studentId,
            challengeId
        })

        return submission
    }
}