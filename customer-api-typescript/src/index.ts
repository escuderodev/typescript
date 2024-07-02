import { App } from "./app"
import Dotenv from "dotenv"
Dotenv.config({path: 'env/dev.env'})

new App().getServer().listen(process.env.PORT)
