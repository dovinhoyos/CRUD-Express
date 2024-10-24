import express from 'express'
import ProductRoutes from './routes/ProductRoutes.js'
import db from './config/database.js'

const app = express()
const port = 3000

try {
    await db.authenticate()
    console.log('Database connected')
} catch (error) {
    console.log('Connection error ' + error)
}

await db.sync();

app.use(express.json())
app.use(ProductRoutes)

app.listen(port, () => console.log(`Server running on port ${ port }`))