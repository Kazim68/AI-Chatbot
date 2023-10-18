import express from 'express'
import userRouter from './userRoutes.js'
import chatRouter from './chatRoutes.js'

const router = express.Router()

router.use('/user', userRouter)
router.use('/chat', chatRouter)

export default router