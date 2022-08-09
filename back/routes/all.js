var express = require('express');
var router = express.Router();
const allController = require('../controllers/allController');

router.get('/', allController.readAll);
router.get('/:allId', allController.read);
router.post('/', allController.write);
router.delete('/:allId', allController.delete);


module.exports = router;