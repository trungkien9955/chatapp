const mongoose = require("mongoose")
const hobbySchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        maxlength: 150,
    },
    type: {
        type: String,
    }
})
const Hobby = mongoose.model("Hobby", hobbySchema)
module.exports = Hobby