const router = require('express').Router();
const { authentication } = require('../middlewares/auths')
const errorHandler = require('../middlewares/errorHandler.js');

router.get('/', (req, res) => {
  res.send('WHEEE!')
});

router.use('/users', require('./user.js'));

router.use(authentication)

router.use('/activities', require('./activity.js'))
router.use('/user-activities', require('./userActivity.js'))

router.use(errorHandler)

module.exports = router;
