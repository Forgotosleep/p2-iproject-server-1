const { User, Activity, UserActivity } = require('../models')

class controllerUserActivity {
  static async getAllByUser(req, res, next) {
    try {
      const UserId = req.user.id

      const result = await UserActivity.findAll({
        where: { UserId },
        attributes: { exclude: ["createdAt", "updatedAt"] },
        include: [{
          model: Activity,
          attributes: { exclude: ["createdAt", "updatedAt"] },
        },
        {
          model: User,
          attributes: { exclude: ["password", "createdAt", "updatedAt"] },
        }
        ]
      })
      res.status(200).json(result)

    } catch (err) {
      next(err)
    }
  }

  static async addNewRecord(req, res, next) {
    try {
      const UserId = req.user.id
      const { ActivityId } = req.body

      const result = await UserActivity.create({
        UserId, ActivityId, status: "pending"
      })

      res.status(201).json(result)

    } catch (err) {
      next(err)
    }
  }

  static async editRecord(req, res, next) {
    try {
      const UserId = req.user.id
      const recordId = req.params.recordId
      const { ActivityId } = req.body

      const record = await UserActivity.findByPk(recordId)

      if (!record) {
        throw { name: "NotFound", message: "Record not found" }
      }

      if (record.UserId !== UserId) {  // This is gonna be cut out into AuthZ. Temporary
        throw { name: "Unauthorized" }
      }

      const result = await UserActivity.update({
        ActivityId
      },
        {
          where: { id: recordId },
          returning: true
        })

      res.status(200).json(result[1])

    } catch (err) {
      next(err)
    }
  }

  static async patchRecord(req, res, next) {
    try {
      const UserId = req.user.id
      const recordId = req.params.recordId
      const { status } = req.query
  
      console.log(req.query, '<<< QUERY');
  
      const record = await UserActivity.findByPk(recordId)
  
      if (!record) {
        throw { name: "NotFound", message: "Record not found" }
      }
  
      if (record.UserId !== UserId) {  // This is gonna be cut out into AuthZ. Temporary
        throw { name: "Unauthorized" }
      }
  
      const result = await UserActivity.update(
        {
          status
        },
        {
          where: { id: recordId },
        })
  
      res.status(200).json({message: `Status of record with ID of ${recordId} has been set to ${status}.`})
    } catch (err) {
      next(err)
    }
  }

  static async deleteRecord(req, res, next) {
    try {
      const UserId = req.user.id
      const recordId = req.params.recordId
  
      const record = await UserActivity.findByPk(recordId)
  
      if (!record) {
        throw { name: "NotFound", message: "Record not found" }
      }
  
      if (record.UserId !== UserId) {  // This is gonna be cut out into AuthZ. Temporary
        throw { name: "Unauthorized" }
      }
  
      const result = await UserActivity.update(
        {
          status: "hidden"
        },
        {
          where: { id: recordId },
        })
  
      res.status(200).json({message: `Record with ID of ${recordId} has been deleted.`})
    } catch (err) {
      next(err)
    }
  }
}

module.exports = controllerUserActivity