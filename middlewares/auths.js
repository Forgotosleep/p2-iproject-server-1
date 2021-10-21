const { verifyToken } = require('../helpers/jwt')
const { User } = require('../models')

const authentication = async (req, res, next) => {
  try {
    const { access_token } = req.headers
    if (!access_token) {
      throw ({ name: 'MissingToken' })
    }
    const { email } = verifyToken(access_token)
    const result = await User.findOne(
      { where: { email } }
    )
    if (!result) {
      throw ({ name: 'InvalidJWT' })
    }
    //If all is well,
    req.user = {
      id: result.id,
      email: result.email,
    }
    next()

  } catch (err) {
    next(err)
  }
}

// const authorization = async (req, res, next) => {
//   try {
//     const UserId = req.user.id
//     const id = req.params.id

    

//   } catch (err) {
//     next(err)
//   }
// }

module.exports = { authentication }
