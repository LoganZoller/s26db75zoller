const mongoose = require("mongoose")
const eggSchema = mongoose.Schema({
    bird_type: String,
    color: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 10
    },
    size: String
});

module.exports = mongoose.model("Egg", eggSchema)