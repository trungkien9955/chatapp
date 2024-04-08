const mongoose = require("mongoose")
const datingGoalSchema = new mongoose.Schema({
    name: {
        type: String,
    }
})
const DatingGoal = mongoose.model("DatingGoal", datingGoalSchema)
module.exports = DatingGoal