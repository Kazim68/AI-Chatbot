import User from '../models/userModel.js'
import {StatusCodes} from 'http-status-codes'

export const getUsers = async (req, res) => { 
    const users = await User.find({})
    res.status(StatusCodes.OK).json(users)
}