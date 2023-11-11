import cloudinary from 'cloudinary'
import dotenv from 'dotenv'
import fs from 'fs'

dotenv.config()

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

export async function uploadImage(files) {
  let urls = []
  for ( const file of files ) {
    await cloudinary.uploader.upload(file.path).then(res => { 
      urls.push({ id: res.public_id, url: res.secure_url}) 
      deleteImageFromMulter(file)
    })
  }
  return urls
}

export async function deleteImageFromMulter(file) {
  fs.unlink(file.path, (err) => {
    if (err) {
      console.error(err)
      return
    }
    return
  })
}

export async function deleteImage(id) {
  const res = await cloudinary.uploader.destroy(id)
  return res
}