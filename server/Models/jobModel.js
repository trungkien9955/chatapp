const mongoose = require("mongoose")
const jobSchema = new mongoose.Schema({

    name: {
        type: String,
    }

})
const Job = mongoose.model("Job", jobSchema)
module.exports = Job