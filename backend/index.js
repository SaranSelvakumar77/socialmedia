import express from 'express'
import connectDB from './database/dbconfig.js'
import dotenv from 'dotenv'
import cors from 'cors'


dotenv.config()

const app = express()
connectDB()

app.use(express.json())

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.post('/Signup', (req, res) => {
    res.json({ msg: "Signup details recived" })
    console.log("signup details:", req.body)
})


app.use("/", (req, res) => {
    console.log("Server is running")
    res.send("Server is running")
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})

