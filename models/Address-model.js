import mongoose from 'mongoose'

const AddressSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  streetAddressAndNumber: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    required: true
  },
  zipCode: {
    type: String,
    required: true,
    maxlength: 5
  },
  city: {
    type: String,
    required: true
  },
  additionalData: {
    type: String,
  },
  addressDefault: {
    type: Boolean,
    default: false
  }
}, { timestamps: true })

export const Address = mongoose.model("Address", AddressSchema)
