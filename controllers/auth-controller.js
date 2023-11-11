import { User } from '../models/User-model.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const signIn = async(req, res) => {
  const { email, password: userPass } = req.body

  if(email === '' || userPass === '') {
    return res.status(500).json({ message: 'All fields must be populated' })
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "Invalid credentials" });
    }
    const comparePass = await bcrypt.compare(req.body.password, user.password);
    if (!comparePass) {
      return res.status(404).json({ message: "Invalid credentials" });
    }

    const {password, ...others} = user._doc    
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '5h' })
    
    return res.status(200).json({ message: 'Sign in successfully' ,user: others, token })
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
}

export const signUp = async(req, res) => {
  console.log(req.body)
  try {
    const isExisting = await User.findOne({ email: req.body.email })
    
    if(isExisting) return res.status(500).json({ message: 'User has been already registered'})

    if(req.body.username === '' || req.body.email === '' || req.body.password === '') {
      return res.status(500).json({ message: 'All fields must be populated' })
    }
    
    const hashedPassword = await bcrypt.hash( req.body.password, 10)
    
    const user = await User.create({ ...req.body, password: hashedPassword })
    
    await user.save()
    
    const { password, ...others } = user._doc
    const token = jwt.sign({ user: user }, process.env.JWT_SECRET, {
      expiresIn: "5h"
    })

    return res.status(201).json({ message: 'Sign up successfully' ,user: others, token })
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
}
