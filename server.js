import app from './app.js'
import {connect} from './db/connect.js'

const PORT = process.env.PORT || 3000

const start = () => {
    connect(process.env.MONGODB_URL)
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })
}

start()