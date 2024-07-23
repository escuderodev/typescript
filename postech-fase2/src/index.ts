import { App } from "./app"
import "dotenv/config"

new App().getServer().listen(process.env.PORT)
