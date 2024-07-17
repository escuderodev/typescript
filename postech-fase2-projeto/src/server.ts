import express, { json } from "express"
import "dotenv/config"
import { userRouter } from "../src/routes/userRoutes"
import { disciplineRouter } from "../src/routes/disciplineRoutes"

const app = express()

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})

app.use(json())
app.use(userRouter)
app.use(disciplineRouter)