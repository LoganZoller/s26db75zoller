const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

console.log(passportLocalMongoose);
console.log(typeof passportLocalMongoose);

const accountSchema = new Schema({
    username: String,
    password: String
});
accountSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("Account", accountSchema);
