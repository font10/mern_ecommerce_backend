import mongoose from 'mongoose'

const CommentsSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  productId: {
    type: mongoose.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  valoration: {
    type: Number,
    default: 3,
    require: true
  }
}, { timestamps: true })

export const User = mongoose.model("User", CommentsSchema)
