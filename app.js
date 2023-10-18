import express from 'express'
import 'express-async-errors'
import morgan from 'morgan'

import {config} from 'dotenv'
config() 

const app = express()

// middlewares
app.use(express.json())
app.use(morgan('dev'))      // will remove after completion of project

// routes


export default app  