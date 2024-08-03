import { StundentRepository } from "../../application/repositories/StudentsRepository";
import { Student } from "../../domain/entities/student";

export class InMemoryStudentRepository implements StundentRepository {
    public students: Student[] = []

    async findById(id: string): Promise<Student | null> {
        const student = this.students.find(student => student._id === id)

        if(!student) {
            return null
        }

        return student
    }

}