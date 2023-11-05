import { Comment } from '../models/Comments-model.js'

export const addComment = async(req, res) => {
  try {
    const comment = await new Comment({...req.body});

    await comment.save();
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

export const getCommentsByUser = async(req, res) => {
  try {
    const { id } = req.params
    const comments = await Comment.find({ userId: id }).populate('userId').populate('productId')

    if(!comments) return res.status(404).json({ message: 'No comments with this user id' })

    return res.status(200).json({ comments })
  } catch (err) {
    return res.status(500).json({ message: err.message }) 
  }
}

export const editComment = async(req, res) => {
  try {
    const { id } = req.params
    const updateAddress = await Comment.findByIdAndUpdate({ _id: id }, req.body)

    if(!updateAddress) {
      return res.status(400).json({ message: 'Error updating comment' })
    }

    return res.status(202).json({ message: 'Updated successfully' })
  } catch (err) {
    return res.status(500).json({ message: err.message }) 
  }
}

export const deleteComment = async(req, res) => {
  try {
    const { id } = req.params
    const findComment = await Comment.findByIdAndDelete(id)

    if(!findComment) {
      return res.status(400).json({ message: 'Error ocurred when deleting' })
    }
    
    return res.status(200).json({ message: 'Deleted successfully' })
  } catch (err) { 
    return res.status(500).json({ message: err.message }) 
  }
}