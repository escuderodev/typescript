import express, { json } from "express"
import "dotenv/config"

const app = express()

const users = []

const PORT = process.env.PORT

app.listen(PORT)

app.use(json())

console.log(`Server is running on http://localhost:${PORT}`)

// criar usuário
app.post("/usuarios", (req, res) => {
    const usuario = req.body
    users.push(usuario)
    res.status(200).json({usuario})
})


// listar todos os usuários
app.get("/usuarios", (req, res) => {
    res.status(200).json({users})
})

// listar apenas um usuário
app.get("/usuarios/:id", (req, res) => {
    const usuario = users.filter(user => users.find(u => u.id === req.params.id))
    res.status(200).json({usuario})
})

// atualizar usuário

// deletar usuário