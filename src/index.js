import express from 'express'
import ProductRoutes from './routes/ProductRoutes.js'
import cors from 'cors'
import db from './config/database.js'
import morgan from 'morgan'

const app = express()
const port = 3002

try {
    await db.authenticate()
    console.log('Database connected')
} catch (error) {
    console.log('Connection error ' + error)
}

await db.sync();

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(ProductRoutes)

app.listen(port, () => console.log(`Server running on port ${ port }`))