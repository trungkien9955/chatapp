const mongoose = require("mongoose")
const citySchema = new mongoose.Schema({
    alt_id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
        maxlength: 150,
    }
})
const City = mongoose.model("City", citySchema)
module.exports = City