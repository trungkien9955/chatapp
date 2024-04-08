const mongoose = require("mongoose")
const wardSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
        maxlength: 150,
    }, 
    districtId: {
        type: Number,
        required: true,
    },
})
const Ward = mongoose.model("Ward", wardSchema)
module.exports = Ward