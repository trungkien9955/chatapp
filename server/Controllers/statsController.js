const { default: mongoose } = require("mongoose");
const userModel = require("../Models/userModel");
const Chat = require("../Models/chatModel");

const getStats = async(req, res)=>{
    try{
        const {dCityId} = req.body
        const cityUserCount = await userModel.find({datingCity: new mongoose.Types.ObjectId(dCityId)}).countDocuments()
        const totalUser = await userModel.countDocuments()
        const fUserCount = await userModel.find({gender: new mongoose.Types.ObjectId("65dca214d75b5575b7cd92e5")}).countDocuments()
        const mUserCount = await userModel.find({gender: new mongoose.Types.ObjectId("65dca214d75b5575b7cd92e6")}).countDocuments()
        const users = await userModel.find().limit(9)
        const topUsers = await userModel.find({'fans.1': {$exists:true}})
        const matchCount = await Chat.countDocuments()

        // const topUsers = await userModel.where('tags').size(1).exec()
        // const count = await userModel.find({fans: {$gt: {$size: 1}}}).count()
        res.status(200).json({cityUserCount,totalUser: totalUser, topUsers: topUsers, users: users, fUserCount, mUserCount, matchCount})
    }catch(error){
        console.log(error)
        res.status(500).json(error)
    }
}

module.exports = {getStats}