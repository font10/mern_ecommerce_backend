import { Product } from '../models/Product-model.js'

export const getProducts = async(req, res) => {
  try {
    const products = await Product.find({})

    if(!products.length > 0) return res.status(404).json({ message: 'No products' })

    return res.status(200).json({ products })
  } catch (err) {
    return res.status(500).json({ message: error.message }) 
  }
}

export const getProduct = async(req, res) => {
  try {
    const { id } = req.params
    const product = await Product.findById(id)

    if(!product) return res.status(404).json({ message: 'No product with this id' })

    return res.status(200).json( product )
  } catch (err) {
    return res.status(500).json({ message: err.message }) 
  }
}

export const createProduct = async(req, res) => {
  try {
    const product = await new Product({...req.body});

    await product.save();
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({message: error});
  }
}