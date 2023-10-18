import express from 'express'

import dotenv from 'dotenv'
dotenv.config() 

const app = express()

// middlewares
app.use(express.json())

// routes


export default app  