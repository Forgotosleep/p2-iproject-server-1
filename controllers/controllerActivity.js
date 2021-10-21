const { User, Activity } = require('../models')

class controllerActivity {
  static async getAllByUser(req, res, next) {
    try {
      const UserId = req.user.id

      // console.log(UserId, '<<< USERID');

      const result = await Activity.findAll({
        where: { UserId },
        attributes: { exclude: ["createdAt", "updatedAt"] },
        include: [{
          model: User,
          as: "Author",
          attributes: { exclude: ["password", "createdAt", "updatedAt"] },
        }]
      })
      res.status(200).json(result)

    } catch (err) {
      next(err)
    }
  }

  static async addNewActivity (req, res, next) {
    try {
      const { title, description } = req.body
      const UserId = req.user.id
      const result = await Activity.create({
        title, description, UserId
      })

      res.status(201).json(result)

    } catch (err) {
      next(err)
    }
  }

  static async editActivity (req, res, next) {
    try {
      const { title, description } = req.body
      const ActivityId = req.params.id

      const result = await Activity.update({
        title, description
      }, {
        where: { id: ActivityId },
        returning: true
      }
      )

      if (!result[0]) {
        throw { name: "NotFound", message: "Activity not found" }
      }

      res.status(200).json(result[1])

    } catch (err) {
      next(err)
    }
  }

  static async deleteActivity (req, res, next) {
    try {
      const ActivityId = req.params.id
      const activity = await Activity.findByPk(ActivityId)
      
      if (!activity) {
        throw { name: "NotFound", message: "Activity not found" }
      }

      const result = await Activity.destroy({
        where: { id: ActivityId }
      })
      res.status(200).json({message: `Successfully deleted Activity with ID ${activity.id}`})

    } catch (err) {
      next(err)
    }
  }
}

module.exports = controllerActivity