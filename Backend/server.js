import express from 'express'
import { configDotenv } from 'dotenv'
import connectDB from './config/dbConnection.js'
import authRoutes from './routes/authRoute.js'
import  errorHandler from './middlewares/errorHandler.js'
import cors from 'cors'
const app = express()
configDotenv()
connectDB()

app.use(express.json())
app.use(cors())
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api',authRoutes)

app.use(errorHandler)
const port = process.env.PORT
app.listen(port, () => {
  console.log('app listening on port ' + port)
})