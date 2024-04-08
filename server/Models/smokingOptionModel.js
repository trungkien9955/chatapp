const mongoose = require("mongoose")
const smokingOptionSchema = new mongoose.Schema({

    name: {
        type: String,
    }

})
const SmokingOption = mongoose.model("SmokingOption", smokingOptionSchema)
module.exports = SmokingOption