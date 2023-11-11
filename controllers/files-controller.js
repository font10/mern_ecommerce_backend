import fs from 'fs'
import { uploadImage, deleteImage } from '../cloudinary/cloudinary.js'

export const uploadImages = async(req, res) => {
  try {
    const images = await uploadImage(req.files)
    res.status(200).json({ message: 'Image uploaded successfully', images })
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
}

export const deleteImageById = async(req, res) => {
  const { result } = await deleteImage(req.params.id)
  if( result === 'ok') res.status(200).json({ message: 'Deleted successfully' })
  else res.status(500).json({ message: 'Error deleting the image' })
}

/*function saveImage(file) {
  const newPath = `/public/images/${file.originalname}`
  fs.renameSync(file.path, newPath)
  return newPath
}*/