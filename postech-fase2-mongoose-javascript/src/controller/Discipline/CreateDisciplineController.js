import { CreateDisciplineService } from "../../service/Discipline/CreateDisciplineService.js"

export const createDiscipline = async (req, res) => {

    const createDisciplineService = new CreateDisciplineService()
    await createDisciplineService.execute(req, res)
    
    res.status(201).json({
        message: "create discipline is success!"
    })
}