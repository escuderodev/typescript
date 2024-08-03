import { Student } from "../../domain/entities/student";

export interface StundentRepository {
    findById(id: string): Promise<Student | null>
}