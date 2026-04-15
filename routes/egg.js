var express = require('express');
const egg_controllers = require('../controllers/egg');
var router = express.Router();

/* GET detailed egg page. */
router.get('/create', egg_controllers.egg_create_Page);
module.exports = router;