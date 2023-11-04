import { Address } from '../models/Address-model.js';

export const getAddressesByUser = async(req, res) => {
  try {
    const { id } = req.params
    const addresses = await Address.find({ userId: id }).populate('userId', '-password')

    if(!addresses) return res.status(404).json({ message: 'No addresses with this user id' })

    return res.status(200).json({ addresses })
  } catch (err) {
    return res.status(500).json({ message: err.message }) 
  }
}

export const getAddressById = async(req, res) => {
  try {
    const { id } = req.params
    const address = await Address.findById(id).populate('userId', '-password')

    if(!address) return res.status(404).json({ message: 'No address with this user id' })

    return res.status(200).json({ address })
  } catch (err) {
    return res.status(500).json({ message: err.message }) 
  }
}

export const addAddress = async(req, res) => {
  try {
    const address = await new Address({...req.body});

    await address.save();
    return res.status(200).json(address);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}

export const editAddress = async(req, res) => {
  try {
    const { id } = req.params
    const updateAddress = await Address.findByIdAndUpdate({ _id: id }, req.body)

    if(!updateAddress) {
      return res.status(400).json({ message: 'Error updating address' })
    }

    return res.status(202).json({ message: 'Updated successfully' })
  } catch (err) {
    return res.status(500).json({ message: err.message }) 
  }
}

export const deleteAddress = async(req, res) => {
  try {
    const { id } = req.params
    console.log(id)
    const findAddress = await Address.findByIdAndDelete(id)

    if(!findAddress) {
      return res.status(400).json({ message: 'Error ocurred when deleting' })
    }
    
    return res.status(200).json({ message: 'Delete successfully' })
  } catch (err) { 
    return res.status(500).json({ message: err.message }) 
  }
}