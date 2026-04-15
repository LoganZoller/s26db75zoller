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
        result = await Egg.findById(req.params.id)
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
exports.egg_delete = async function(req, res) {
    console.log("delete" + req.params.id)
    try {
        result = await Egg.findByIdAndDelete( req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
}
exports.egg_update_put = async function(req, res) {
    console.log("BODY:", req.body);
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Egg.findById(req.params.id)
        if(req.body.bird_type)
            toUpdate.bird_type = req.body.bird_type;
        if(req.body.color) toUpdate.color = req.body.color;
        if(req.body.size) toUpdate.size = req.body.size;
        let result = await toUpdate.save();
        console.log("Success " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
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
exports.egg_view_one_Page = async function (req,res) {
    console.log("single view for id " + req.query.id)
    try{ 
        result = await Egg.findById(req.query.id)
        res.render('eggdetail', 
            { title: 'Egg Detail', toShow: result });
    } catch (err) {
        res.status(500)
        res.send(`{'error': ${err}'}`);
    }
}
exports.egg_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('eggcreate', {title: 'Egg Create'});
    }
    catch(err) {
        res.status(500)
        res.send(` {'error':'${err}'}`);
    }
}