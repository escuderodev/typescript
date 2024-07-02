import express, { json } from 'express'
import { router } from './router'
import "dotenv/config"

export class App {
    private server: express.Application

    constructor() {
        this.server = express()
        this.server.use(json())
        this.server.use(router)
    }

    public getServer(): express.Application {
        console.log(`Server is running on http://localhost:${process.env.PORT}`)
        return this.server
    }
}