const mongoose = require("mongoose")
const eduSchema = new mongoose.Schema({

    name: {
        type: String,
    }

})
const Edu = mongoose.model("Edu", eduSchema)
module.exports = Edu