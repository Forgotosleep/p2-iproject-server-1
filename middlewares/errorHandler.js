const errorHandler = (err, req, res, next) => {
  let message = []
  console.log(err.name, '<<<< ERR NAME');
  switch (err.name) {
    case "SequelizeValidationError":
      err.errors.map(error => {
        message.push(error.message)
      }) 
      // res.status(400).json({ message: err.errors[0].validatorArgs[0]?.message || err.errors[0].message })
      res.status(400).json({ message })
      res.status(400).json(err)
      break
    case "SequelizeUniqueConstraintError":
      err.errors.map(error => {
        message.push(error.message)
      }) 
      res.status(400).json({ message })
      break
    case "SequelizeForeignKeyConstraintError":
      err.errors.map(error => {
        message.push(error.message)
      }) 
      res.status(400).json({ message })
      break
    case "SequelizeDatabaseError":
      res.status(400).json({ message: err })
      break
    case "NotFound":
      res.status(404).json({ message: err.message })
      break
    case "LoginError":
      res.status(401).json({ message: 'Invalid email/password' })
      break
    case "FindAllHistoryError":
      res.status(500)
      break
    case "InvalidStatusInput":
      res.status(400).json({ message: 'Invalid status input. Please input active/inactive instead.' })
      break
    case "MissingToken":
      res.status(401).json({ message: err.message || 'Please provide a valid access token' })
      break
    case "JsonWebTokenError":
      res.status(401).json({ message: err.message })
      break
    default:
      console.log(err, "<<<<< ERRR");  // For testing purpoises
      // res.status(500).json(err)  // For troubleshooting

    res.status(500).json({ message: 'Internal server error' })
  }
}

module.exports = errorHandler