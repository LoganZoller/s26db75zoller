var Egg = require('../models/eggSchema');


exports.egg_list = async function(req,res) {
    try {
        theEggs = await Egg.find();
        res.send(theEggs);
    }
    catch(err) {
        res.status(500);
        res.send(`{"error":${err}}`);
    }
}
exports.egg_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Egg detail: ' + req.params.id);
}
exports.egg_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Egg create POST');
}
exports.egg_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Egg delete DELETE ' + req.params.id);
}
exports.egg_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: Egg update PUT' + req.params.id);
}
