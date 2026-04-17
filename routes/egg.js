var express = require('express');
const egg_controllers = require('../controllers/egg');
var router = express.Router();

/* GET detailed egg page. */
router.get('/', egg_controllers.egg_view_all_Page);

router.get('/:id/update', egg_controllers.egg_update_Page);
module.exports = router;