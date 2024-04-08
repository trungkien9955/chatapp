const mongoose = require("mongoose")
const districtSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
        maxlength: 150,
    }, 
    cityId: {
        type: Number,
        required: true,
    },
})
const District = mongoose.model("District", districtSchema)
module.exports = District