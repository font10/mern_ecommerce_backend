import express from 'express'
import { verifyToken } from '../middlewares/auth.js'
import { deleteImageById, uploadImages } from '../controllers/files-controller.js'
import { upload } from '../middlewares/multer.js'

const filesRouter = express.Router()

filesRouter.post('/uploadImages', verifyToken, upload.array('images'), uploadImages)
filesRouter.delete('/delete/:id', verifyToken, deleteImageById)

export default filesRouter