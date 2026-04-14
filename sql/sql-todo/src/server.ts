import express, {Request, Response} from "express";
import { db } from "./config/db";

const app = express()
app.use(express.json())

app.get("/", (req: Request, res: Response) => {
    res.send("Hello, world!")
})

app.get("/todos", async (req: Request, res: Response) => {
    try {
        const [result] = await db.query('SELECT * FROM todos')
        res.json({result})
    } catch (error) {
        res.json({error})
    }
})

app.post("/todos", async (req: Request, res: Response) => {
    try {
        const { title, description, done } = req.body;

        const [result] = await db.query(
            `INSERT INTO todos (title, description, done)
            VALUES (?, ?, ?)`,
            [title, description, done]
        )

        res.json({result})
    } catch (error) {
        res.json({error})
    }
})

app.listen(3000, () => {
    console.log("Listening app on 3000")
})