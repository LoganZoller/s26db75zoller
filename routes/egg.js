var express = require('express');
const egg_controllers = require('../controllers/egg');
var router = express.Router();

/* GET home page. */
router.delete('/egg/:id', egg_controllers.egg_delete);
module.exports = router;