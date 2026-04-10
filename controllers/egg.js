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
exports.egg_detail = async function(req, res) {
    console.log("detail" +req.params.id)
    try {
        result = await Costume.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": documentfor id ${req.params.id} not found`);
    }
}
exports.egg_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Egg();
    document.bird_type = req.body.bird_type;
    document.color = req.body.color;
    document.size = req.body.size;
    try{
        let result = await document.save();
        res.send(result);
    }
    catch(err) {
        res.status(500);
        res.send(`{"error":${err}}`);
    }
}
exports.egg_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Egg delete DELETE ' + req.params.id);
}
exports.egg_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: Egg update PUT' + req.params.id);
}
exports.egg_view_all_Page = async function(req, res) {
    try {
        theEggs = await Egg.find();
        res.render('egg', {title: 'Egg Search Results', results: theEggs});
    }
    catch(err) {
        res.status(500);
        res.send(`{"error":${err}}`);
    }
}