const mongoose = require("mongoose")
const notiSchema = new mongoose.Schema(
    {
        senderId: String,
        recipientId: String,
        image: String,
        text: String,
        type: String,
        isRead: Boolean,
    },
    {
        timestamps:true,
    }
)
const Noti = mongoose.model("Noti", notiSchema)
module.exports = Noti