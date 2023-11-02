import { Order } from '../models/Orders-model.js'

export const addOrder = async(req, res) => {
  try {
    console.log(req.body)
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
    const comments = await Order.find({ userId: id })
      .populate('userId')
      .populate('address')

    if(!comments) return res.status(404).json({ message: 'No orders with this user id' })

    return res.status(200).json({ comments })
  } catch (err) {
    return res.status(500).json({ message: err.message }) 
  }
}