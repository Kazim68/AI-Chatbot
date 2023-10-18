import mongoose from 'mongoose'

const Chat = mongoose.Schema({
    role: {
        type: String,
        required: true
    }, 
    content: {
        type: String,
        required: true
    }
})

export default mongoose.model('Chat', Chat);