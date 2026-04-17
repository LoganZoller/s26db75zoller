var express = require('express');
const egg_controllers = require('../controllers/egg');
var router = express.Router();

/* GET detailed egg page. */
router.get('/egg', egg_controllers.egg_view_all_Page);
module.exports = router;