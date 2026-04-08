var express = require('express');
const egg_controllers = require('../controllers/egg');
var router = express.Router();

/* GET home page. */
router.get('/', egg_controllers.egg_view_all_Page);
module.exports = router;