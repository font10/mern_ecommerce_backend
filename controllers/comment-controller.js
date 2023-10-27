import { Comment } from '../models/Comments-model.js'

export const addComment = async(req, res) => {
  console.log('comment')
  try {
    console.log(req.body)
    const product = await new Comment({...req.body});

    await product.save();
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}

export const getCommentsByProduct = async(req, res) => {
  try {
    const { id } = req.params
    const comments = await Comment.find({ productId: id }).populate('userId').populate('productId')

    if(!comments) return res.status(404).json({ message: 'No comments with this product id' })

    return res.status(200).json({ comments })
  } catch (err) {
    return res.status(500).json({ message: err.message }) 
  }
}