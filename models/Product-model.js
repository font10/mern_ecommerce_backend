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
  size: {
    type: Array,
    require: true,
    default: ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49']
  },
  stars: {
    type: Number,
    default: 3
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
}, { timestamps: true })

export const Product = mongoose.model("Product", ProductSchema)
