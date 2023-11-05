import express from 'express'
import { addComment, deleteComment, editComment, getCommentsByProduct, getCommentsByUser } from '../controllers/comment-controller.js'
import { verifyToken } from '../middlewares/auth.js'

const commentRouter = express.Router()

commentRouter.get('/:id', getCommentsByProduct)
commentRouter.get('/user/:id', getCommentsByUser)
commentRouter.post('/', verifyToken, addComment)
commentRouter.patch('/:id', verifyToken, editComment)
commentRouter.delete('/:id', verifyToken, deleteComment)

export default commentRouter