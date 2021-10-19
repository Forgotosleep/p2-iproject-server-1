const { User } = require('../models')
const { decode } = require('../helpers/bcrypt')
const { createToken } = require('../helpers/jwt')

class ControllerUser {
  static async register(req, res, next) {
    const { name, email, password } = req.body
    try {
      const result = await User.create(
        {
          name, email, password, role: 'admin'
        },
      )
      res.status(201).json({ id: result.id, email: result.email, name: result.name })
    } catch (err) {
      next(err)
    }
  }

  static async login(req, res, next) {
    const { email, password } = req.body
    try {

      if (!email || !password) {
        throw { name: 'LoginError' }
      }

      const user = await User.findOne(
        { where: { email } }
      )
      if (!user || !decode(password, user.password)) {
        throw { name: 'LoginError' }
      }
      const access_token = createToken({ username: user.username, email: user.email })
      res.status(200).json({ access_token })

    } catch (err) {
      next(err)
    }
  }

  static async loginGoogle(req, res, next) {
    try {
      let { idToken } = req.body
      const ticket = await client.verifyIdToken({
        idToken: idToken,
        audience: process.env.GOOGLECLIENTID
      })

      let payload = ticket.getPayload()

      let user = await User.findOrCreate(
        {
          where: {
            email: payload.email
          }, defaults: {
            email: payload.email,
            name: payload.name,
            password: `${payload.email}_${payload.name}`
          }
        }
      )
      const access_token = createToken({
        id: user[0].id,
        email: user[0].email,
      })
      res.status(200).json({ access_token })
    } catch (err) {
      next(err)
    }
  }
}

module.exports = ControllerUser