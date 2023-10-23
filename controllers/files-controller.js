
export const firstImg = (req, res) => {
  try {
    return res.status(200).json({ message: 'Image uploaded successfully' })
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
}

export const secondImg = (req, res) => {
  try {
    return res.status(200).json({ message: 'Image uploaded successfully' })
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
}

