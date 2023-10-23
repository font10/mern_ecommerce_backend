import express from 'express'
import { verifyToken } from '../middlewares/auth.js'
import { firstImg, secondImg } from '../controllers/files-controller.js'
import upload from '../middlewares/upload.js'

const filesRouter = express.Router()

filesRouter.post('/firstimg', verifyToken, upload, firstImg)
filesRouter.post('/secondimg', verifyToken, upload, secondImg)

export default filesRouter