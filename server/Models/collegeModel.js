const mongoose = require("mongoose")
const collegeSchema = new mongoose.Schema({

    name: {
        type: String,
    }

})
const College = mongoose.model("College", collegeSchema)
module.exports = College