import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { connectDB } from './config/db.js'
import authRouter from './routes/auth-routes.js'
import productRouter from './routes/product-routes.js'
import filesRouter from './routes/files-routes.js'
import multer from 'multer'

const app = express()
dotenv.config()

//? Mongo connection
connectDB()

//? Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use('/auth', authRouter)
app.use('/product', productRouter)
app.use('/files', filesRouter)

app.listen(process.env.PORT, () => {
  console.log(`Running on port ${process.env.PORT}`)
})
