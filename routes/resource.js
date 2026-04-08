var express = require('express');
var router = express.Router();

var api_controller = require('../controllers/api');
var egg_controller = require('../controllers/egg');

router.get('/', api_controller.api);

router.post('/egg', egg_controller.egg_create_post);
router.delete('/egg/:id', egg_controller.egg_delete);
router.put('/egg/:id', egg_controller.egg_update_put);
router.get('/egg/:id', egg_controller.egg_detail);
router.get('/egg', egg_controller.egg_list);

module.exports = router;