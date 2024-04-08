const mongoose = require("mongoose")
const kidOptionSchema = new mongoose.Schema({

    name: {
        type: String,
    }

})
const KidOption = mongoose.model("KidOption", kidOptionSchema)
module.exports = KidOption