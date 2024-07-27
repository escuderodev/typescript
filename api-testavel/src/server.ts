import express, { json } from "express"
import "dotenv/config"
import { insumoRouter } from "../src/routes/insumoRoutes"

export class App {
    private server: express.Application

    constructor() {
        this.server = express()
        this.server.use(json())
        this.server.use(insumoRouter)
        this.server.get("/", (req: express.Request, res: express.Response) => {
            res.status(200).json({message: "Bem vindo a minha API!"})
        })
    }

    public getServer(): express.Application {
        return this.server
    }
}