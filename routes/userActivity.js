const router = require('express').Router();
const ControllerUserActivity = require('../controllers/controllerUserActivity')

router.get('/', ControllerUserActivity.getAllByUser);
router.post('/', ControllerUserActivity.addNewRecord);
router.put('/:recordId', ControllerUserActivity.editRecord);
router.patch('/:recordId', ControllerUserActivity.patchRecord);
router.delete('/:recordId', ControllerUserActivity.deleteRecord);

module.exports = router;
