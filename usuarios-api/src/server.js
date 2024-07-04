import express from "express"
import "dotenv/config"

const app = express()

app.listen(process.env.PORT)

console.log(`Server is running on http://localhost:${process.env.PORT}`)

app.get("/usuarios", (req, res) => {
    res.status(200).send('Bem vindo a minha API!')
})