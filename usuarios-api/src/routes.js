import { Router } from "express"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const router = Router()

// criar usuário
router.post("/usuarios", async (req, res) => {

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
router.get("/usuarios", async (req, res) => {
    const userList = await prisma.user.findMany()
    res.status(200).json({userList})
})

// listar apenas um usuário
router.get("/usuarios/:id", async (req, res) => {
    const usuario = await prisma.user.findUnique({
        where: {
          id: req.params.id,
        },
      })
    res.status(200).json({usuario})
})

// atualizar usuário
router.put("/usuarios/:id", async (req, res) => {

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
router.delete("/usuarios/:id", async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })
    res.status(200).json({message: 'Usuário deletado com sucesso!'})
})

export {router}