import { describe } from "node:test";
import { CreateChallengeSubmission } from "./create-challenge-submission";
import { InMemoryStudentRepository } from "../../tests/repositories/in-memory-student-repository";
import { InMemoryChallengeRepository } from "../../tests/repositories/in-memory-challenge-repository";
import { Student } from "../../domain/entities/student";
import { Challenge } from "../../domain/entities/challenge";

describe('Create challange submission use case', () => {
    it('should be able create a new challenge submission', async () => {
        const studentsRepository = new InMemoryStudentRepository()
        const challengesRepository = new InMemoryChallengeRepository()

        const student = Student.create({
            name: "Eduardo Escudero",
            email: "escuderodev@outlook.com"
        })
        studentsRepository.students.push(student)

        const challenge = Challenge.create({
            title: "Crie uma API com Node.js",
            instructionsUrl: "http://example.com"
        })
        challengesRepository.challenges.push(challenge)

        const createChallangeSubmission = new CreateChallengeSubmission(
            studentsRepository, 
            challengesRepository,
        )

        const response = await createChallangeSubmission.execute({
            studentId: student.id,
            challengeId: challenge.id
        })
        expect(response).toBeTruthy()
    })
})