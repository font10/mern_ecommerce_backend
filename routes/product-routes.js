import express from 'express'
import { createProduct, deleteProduct, editProduct, getProduct, getProducts } from '../controllers/product-controller.js'
import { verifyToken } from '../middlewares/auth.js'

const productRouter = express.Router()

productRouter.get('/', getProducts)
productRouter.get('/:id', getProduct)
productRouter.post('/', verifyToken, createProduct)
productRouter.patch('/:id', verifyToken, editProduct)
productRouter.delete('/:id', verifyToken, deleteProduct)

export default productRouter