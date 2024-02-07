import express, { Request, Response } from "express"
import connectToDatabase from "./db"
import userRoutes from "./routes/user.routes"
import categoryRoutes from "./routes/categories.routes"

const app = express()

app.use(express.json())

const PORT = 1337

connectToDatabase()

app.get("/ping", (request: Request, response: Response) => {
    response.send("Pong")
})

app.use("/users", userRoutes)
app.use("/categories", categoryRoutes)

app.listen(PORT, () => {
    console.log("Server up and running!")
})