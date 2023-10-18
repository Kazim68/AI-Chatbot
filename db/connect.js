import mongoose from 'mongoose'

export const connect = async (url) => {
    return await mongoose.connect(url)
}

export const disconnect = async () => {
    return await mongoose.disconnect()
}