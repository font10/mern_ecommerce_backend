import express from 'express'
import { addComment, getCommentsByProduct } from '../controllers/comment-controller.js'
import { verifyToken } from '../middlewares/auth.js'

const commentRouter = express.Router()

commentRouter.get('/:id', getCommentsByProduct)
commentRouter.post('/', verifyToken, addComment)

export default commentRouter