const User = require('../modals/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}

// login a user
const loginUser = async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await User.login(email, password)

    // create a token
    const token = createToken(user._id)

    res.status(200).json({email, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// signup a user
const signupUser = async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await User.signup(email, password)

    // create a token
    const token = createToken(user._id)

    res.status(200).json({email, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

const userData=async (req,res)=>{
  const users = await User.find({})

  res.status(200).json(users)

}


const getUser = async (req, res) => {
  const {id} = req.params

  if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(404).json({error: "user doesn't exist"})
  }

  const users = await User.findById(id)

  if (!joke){
      return res.status(404).json({error: "user doesn't exist"})
  }

  res.status(200).json(joke)
};



module.exports = { signupUser, loginUser}