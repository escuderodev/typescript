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
app.get("/usuarios/:id", async (req, res) => {
    const usuario = await prisma.user.findUnique({
        where: {
          id: req.params.id,
        },
      })
    res.status(200).json({usuario})
})

// atualizar usuário
app.put("/usuarios/:id", async (req, res) => {

    await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            name: req.body.name,
            email: req.body.email,
            age: req.body.age
        }
    })
    const usuario = req.body
    res.status(201).json(usuario)
})

// deletar usuário
app.delete("/usuarios/:id", async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })
    res.status(200).json({message: 'Usuário deletado com sucesso!'})
})


// https://www.youtube.com/watch?v=PyrMT0GA3sE&ab_channel=DevClub%7CPrograma%C3%A7%C3%A3o