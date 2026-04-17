var express = require('express');
const egg_controllers = require('../controllers/egg');
var router = express.Router();

/* GET detailed egg page. */
router.get('/resource/egg/:id/update', egg_controllers.egg_update_Page);
module.exports = router;