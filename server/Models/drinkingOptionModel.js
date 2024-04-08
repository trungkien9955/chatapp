const mongoose = require("mongoose")
const drinkingOptionSchema = new mongoose.Schema({

    name: {
        type: String,
    }

})
const DrinkingOption = mongoose.model("DrinkingOption", drinkingOptionSchema)
module.exports = DrinkingOption