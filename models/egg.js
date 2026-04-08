const mongoose = require("mongoose")
const eggSchema = mongoose.Schema({
    bird_type: String,
    color: String,
    size: String
})

module.exports = mongoose.model("egg", eggSchema)