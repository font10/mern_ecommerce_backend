import express from 'express'
import { addComment, deleteComment, getCommentsByProduct, getCommentsByUser } from '../controllers/comment-controller.js'
import { verifyToken } from '../middlewares/auth.js'

const commentRouter = express.Router()

commentRouter.get('/:id', getCommentsByProduct)
commentRouter.get('/user/:id', getCommentsByUser)
commentRouter.post('/', verifyToken, addComment)
commentRouter.delete('/:id', verifyToken, deleteComment)

export default commentRouter