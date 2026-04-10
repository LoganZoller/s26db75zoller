var express = require('express');
const egg_controllers = require('../controllers/egg');
var router = express.Router();

/* GET home page. */
router.put('/egg/:id', egg_controllers.egg_update_put);
module.exports = router;