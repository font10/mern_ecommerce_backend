import { Order } from '../models/Orders-model.js'

export const addOrder = async(req, res) => {
  try {
    const order = await new Order({...req.body});
    
    await order.save();
    return res.status(200).json(order);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}

export const getOrders = async(req, res) => {
  try {
    const orders = await Order.find({})
      .populate('userId')
      .populate('address')

    if(!orders) return res.status(404).json({ message: 'No orders with this user id' })

    return res.status(200).json({ orders })
  } catch (err) {
    return res.status(500).json({ message: err.message }) 
  }
}

export const getOrdersByUser = async(req, res) => {
  try {
    const { id } = req.params
    const orders = await Order.find({ userId: id })
      .populate('userId')
      .populate('address')

    if(!orders) return res.status(404).json({ message: 'No orders with this user id' })

    return res.status(200).json({ orders })
  } catch (err) {
    return res.status(500).json({ message: err.message }) 
  }
}

export const deleteOrder = async(req, res) => {
  try {
    const { id } = req.params
    const findOrder = await Order.findByIdAndDelete(id)

    if(!findOrder) {
      return res.status(400).json({ message: 'Error ocurred when deleting' })
    }
    
    return res.status(200).json({ message: 'Deleted successfully' })
  } catch (err) { 
    return res.status(500).json({ message: err.message }) 
  }
}