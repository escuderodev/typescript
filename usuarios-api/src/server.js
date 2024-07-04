import express, { json } from "express"
import "dotenv/config"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const app = express()

const users = []

const PORT = process.env.PORT

app.listen(PORT)

app.use(json())

console.log(`Server is running on http://localhost:${PORT}`)

// criar usuário
app.post("/usuarios", async (req, res) => {

    await prisma.user.create({
        data: {
            name: req.body.name,
            email: req.body.email,
            age: req.body.age
        }
    })
    const usuario = req.body
    res.status(201).json(usuario)
})


// listar todos os usuários
app.get("/usuarios", async (req, res) => {
    const userList = await prisma.user.findMany()
    res.status(200).json({userList})
})

// listar apenas um usuário
// app.get("/usuarios/:id", (req, res) => {
//     const usuario = users.filter(user => users.find(u => u.id === req.params.id))
//     res.status(200).json({usuario})
// })

// atualizar usuário

// deletar usuário


// https://www.youtube.com/watch?v=PyrMT0GA3sE&ab_channel=DevClub%7CPrograma%C3%A7%C3%A3o