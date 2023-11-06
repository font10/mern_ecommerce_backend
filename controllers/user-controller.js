import { User } from '../models/User-model.js'
import bcrypt from 'bcrypt'

export const updateUser = async(req, res) => {
  try {
    const { id } = req.params

    const updateUser = await User.findByIdAndUpdate({ _id: id }, req.body)

    if(!updateUser) {
      return res.status(400).json({ message: 'Error updating user' })
    }

    return res.status(200).json({ message: 'Updated successfully' })
  } catch (err) {
    return res.status(500).json({ message: err.message }) 
  }
}

export const changePasswordUser = async(req, res) => {
  try {
    const { id } = req.params

    if(req.body.password === '' && req.body.confirmPassword === '') {
      return res.status(500).json({ message: 'All fields must be populated' })
    }

    const hashedPassword = await bcrypt.hash( req.body.password, 10)

    const user = await User.findByIdAndUpdate({ _id: id }, { password: hashedPassword })

    if(!user) return res.status(404).json({ message: 'Could not change password' })

    return res.status(200).json({ message: 'Password changed successfully' })
  } catch (err) {
    return res.status(500).json({ message: err.message }) 
  }
}