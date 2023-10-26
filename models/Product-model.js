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
  images: {
    type: Object,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    require: true,
  },
  gender: {
    type: String,
    require: true,
  },
  size: {
    type: Array,
    require: true,
    default: ['EU 35', 'EU 35.5', 'EU 36', 'EU 36.5', 'EU 37', 'EU 38', 'EU 39', 'EU 40', 'EU 41', 'EU 42', 'EU 43', 'EU 44', 'EU 44.5', 'EU 45', 'EU 46', 'EU 47', 'EU 48', 'EU 49']
  },
  stars: {
    type: Number,
    default: 3
  },
}, { timestamps: true })

export const Product = mongoose.model("Product", ProductSchema)
