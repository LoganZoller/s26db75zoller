var express = require('express');
const egg_controllers = require('../controllers/egg');
var router = express.Router();
var passport = require('passport');

const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    res.redirect("/login");
}

/* GET detailed egg page. */
router.get('/', egg_controllers.egg_view_all_Page);

router.get('/:id/update', secured, egg_controllers.egg_update_Page);


module.exports = router;

