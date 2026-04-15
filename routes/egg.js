var express = require('express');
const egg_controllers = require('../controllers/egg');
var router = express.Router();

/* GET detailed egg page. */
router.get('/delete', egg_controllers.egg_delete_Page);
module.exports = router;