import fs from 'fs'

export const firstImg = (req, res) => {
  try {
    req.files.map(saveImage)
    return res.status(200).json({ message: 'Images uploaded successfully' })
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
}

function saveImage(file) {
  const newPath = `./assets/images/${file.originalname}`
  fs.renameSync(file.path, newPath)
  return newPath
}