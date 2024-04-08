const mongoose = require("mongoose")
const genderSchema = new mongoose.Schema({
    name: {
        type: String,
    }
})
const Gender = mongoose.model("Gender", genderSchema)
module.exports = Gender