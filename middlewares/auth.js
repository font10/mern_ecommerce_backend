import jwt from 'jsonwebtoken'

export const verifyToken = async(req, res, next) => {
  //* Check if we have the token
  console.log(req.headers)
  if(!req.headers.authorization) return res.status(403).json({msg: "Not authorized. No token"})

  if(req.headers.authorization && req.headers.authorization.startsWith("Bearer ")){
    //* Separate the token from Bearer
    const token = req.headers.authorization.split(" ")[1]
    //* Verify the token
    console.log(process.env.JWT_SECRET)
    jwt.verify(token, "ab12cd3ef45gh6ij7kl89mn10", (err, data) => {
        if(err) return res.status(403).json({msg: "Wrong or expired token!!!!"})
        else {
          //* Object with the user info
          req.user = data // an object with the user id as its only property -> data = {id: .....}
          next()
        }
    })
  }
}

