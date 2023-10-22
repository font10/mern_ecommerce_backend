import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
    min: 6,
  },
  firstImg: {
    type: String,
    required: true
  },
  secondImg: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  stars: {
    type: Number,
    default: 3
  },
}, { timestamps: true })

export const Product = mongoose.model("Product", ProductSchema)
