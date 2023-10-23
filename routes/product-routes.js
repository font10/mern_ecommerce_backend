import express from 'express'
import { createProduct, getProduct, getProducts } from '../controllers/product-controller.js'
import { verifyToken } from '../middlewares/auth.js'

const productRouter = express.Router()

productRouter.get('/', getProducts)
productRouter.get('/:id', getProduct)
productRouter.post('/', verifyToken, createProduct)

export default productRouter