var express = require('express');
const egg_controllers = require('../controllers/egg');
var router = express.Router();

/* GET detailed egg page. */
router.get('/detail', egg_controllers.egg_view_one_Page);
module.exports = router;