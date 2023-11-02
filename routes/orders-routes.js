import express from 'express'
import { verifyToken } from '../middlewares/auth.js'
import { addOrder, getOrders, getOrdersByUser } from '../controllers/orders-controller.js'

const orderRouter = express.Router()

orderRouter.get('/', getOrders)
orderRouter.get('/:id', getOrdersByUser)
orderRouter.post('/', verifyToken, addOrder)

export default orderRouter