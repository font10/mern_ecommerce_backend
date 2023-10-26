import mongoose from 'mongoose'

const FileSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true,
    unique: true,
  },
  contentType: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true
  }
}, { timestamps: true })

export const User = mongoose.model("Files", FileSchema)
