import express from 'express';
import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("<h1>Welcome to the Task Api</h1>")
})

// app.post("/task", (req, res) => )

app.get("/task", async (req , res) => {
    try {
        const taskApi = await client.taskApi.findMany({
            where: {
                isCompleted: false
            }
        });
    res.status(200).json(taskApi)
    } catch (e) {
        // console.error("Database Query Error:", error);
        res.status(500).json({ message: "Something went Wrong"})
    }
})

app.get("/task/:id", async (req, res) => {
    try {
        const taskApi = await client.taskApi.findFirst({
        where: {
            id: parseInt(req.params.id),
            isCompleted: false
        }
    })
    if (taskApi) {
        return res.status(200).json(taskApi)
    } else {
        return res.status(404).json({ message: "Task not found!"})
    }
    } catch (e) {
        res.status(500).json({ message: "Something went Wrong"})
    }
})

app.post("/task", async (req, res) => {
    try {
        const {title, description}= req.body
        const newTAsk = await client.taskApi.create({
            data : {
                title,
                description
            }
        })
        res.status(200).json(newTAsk)
    } catch (e) {
        res.status(500).json({ message: "Something went Wrong"})
    }
})

let port;
if (process.env.PORT) {
    port = process.env.PORT
} else {
    port = '8080'
}

app.listen(port, () => {
    console.log(`App running on port ${port}`);
})