import express from 'express'
import { verifyToken } from '../middlewares/auth.js'
import { changePasswordUser, updateUser } from '../controllers/user-controller.js'

const userRouter = express.Router()

userRouter.patch('/:id', verifyToken, updateUser)
userRouter.patch('/password/:id', verifyToken, changePasswordUser)

export default userRouter