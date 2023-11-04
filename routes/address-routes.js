import express from 'express'
import { addAddress, deleteAddress, editAddress, getAddressById, getAddressesByUser } from '../controllers/address-controller.js'
import { verifyToken } from '../middlewares/auth.js'

const addressRouter = express.Router()

addressRouter.get('/:id', getAddressesByUser)
addressRouter.get('/edit/:id', getAddressById)
addressRouter.post('/', verifyToken, addAddress)
addressRouter.patch('/:id', verifyToken, editAddress)
addressRouter.delete('/:id', verifyToken, deleteAddress)

export default addressRouter