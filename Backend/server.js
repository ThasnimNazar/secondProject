import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import { notFound,errorHandler } from './middleware/errorMiddleware.js'
import { connectDB } from './Connections/connections.js'
dotenv.config()
const port = process.env.PORT || 5000

import userRoute from './Routes/userRoute.js'

const app = express()

connectDB()

app.use('/api/parent',userRoute)

app.use(notFound)
app.use(errorHandler)

app.get('/',(req,res)=>res.send('welcome to landing page'))

app.listen(port,()=>{
  console.log(`server started on ${port}`)
})