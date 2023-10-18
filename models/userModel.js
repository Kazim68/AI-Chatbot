import mongoose from 'mongoose';
import Chat from './chatModel.js'

const User = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true
    },
    chats: [Chat]
})

export default mongoose.model('User', User);