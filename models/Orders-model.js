import mongoose from 'mongoose'

const OrdersSchema = new mongoose.Schema({
  address: {
    type: mongoose.Types.ObjectId,
    ref: 'Address',
    required: true,
  },
  products: {
    type: Array,
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true,
  },
}, { timestamps: true })

export const Order = mongoose.model("Order", OrdersSchema)
