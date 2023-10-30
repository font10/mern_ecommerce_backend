import { Comment } from '../models/Comments-model.js'

export const addComment = async(req, res) => {
  console.log(req.body)
  try {
    console.log(1)
    const comment = await new Comment({...req.body});
    console.log(2)

    await comment.save();
    console.log(3)
    return res.status(200).json(comment);
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