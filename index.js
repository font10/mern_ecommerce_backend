import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { connectDB } from './config/db.js'
import authRouter from './routes/auth-routes.js'
import productRouter from './routes/product-routes.js'
import filesRouter from './routes/files-routes.js'
import commentRouter from './routes/comment-routes.js'
import addressRouter from './routes/address-routes.js'
import orderRouter from './routes/orders-routes.js'
import userRouter from './routes/users-routes.js'

const app = express()
dotenv.config()

//? Mongo connection
connectDB()

//? Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/images', express.static('./public/images'))
app.use('/auth', authRouter)
app.use('/product', productRouter)
app.use('/files', filesRouter)
app.use('/comment', commentRouter)
app.use('/address', addressRouter)
app.use('/orders', orderRouter)
app.use('/user', userRouter)

app.get("/", function(req, res) {
  res.status(200).send("Welcome to the restful API");
});

app.listen(process.env.PORT, () => {
  console.log(`Running on port ${process.env.PORT}`)
})
