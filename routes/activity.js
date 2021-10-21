const router = require('express').Router();
const ControllerActivity = require('../controllers/controllerActivity')

router.get('/', ControllerActivity.getAllByUser);
router.post('/', ControllerActivity.addNewActivity);
router.put('/:id', ControllerActivity.editActivity);
router.delete('/:id', ControllerActivity.deleteActivity);

module.exports = router;
