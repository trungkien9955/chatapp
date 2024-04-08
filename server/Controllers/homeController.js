const Noti = require("../Models/notiModel");
const userModel = require("../Models/userModel");
var mongoose = require('mongoose');
const getDefaultHomeUsers = async(req, res)=>{
    const cityId = req.params.cityId
    try{
        const response = await userModel.find({cityId:cityId })
        res.status(200).json(response)
    }catch(error){
        res.status(500).json(error)
    }
}
const getInitialStrangers = async(req, res)=> {
    const {datingCityId, userId} = req.body
    try{
        const response = await userModel.find({_id: {$ne:userId}, cityId: datingCityId}).populate(["hobbyIds", "cityId"]).exec()

        res.status(200).json(response)
    }catch(error){
        res.status(500).json(error)
    }
}
const updateNotiAsRead = async(req, res)=> {
    const {notiId} = req.body
    try{
        const noti = await Noti.findOneAndUpdate({_id: notiId}, {$set: {isRead: true}}, {returnDocument: "after"})
        console.log(noti)
        res.status(200).json({noti})
    }catch(error){
        console.log(error)
        res.status(500).json(error)
    }
}
const removeMessageNoti = async(req, res)=>{
    const {userId, chatId} = req.body
    try{
        const user = await userModel.findById(userId)
        if(user){
            const messageNoti = user.messageNoti
            if(messageNoti.includes(chatId)){
                await userModel.updateOne({_id: userId}, {$pull: {messageNoti: chatId} })
            }
        }
        res.status(200).json({chatId})
    }catch(error){
        res.status(500).json({errMsg: "Lỗi máy chủ"})
    }
}
const getStranger = async(req, res)=> {
    const {userId, filter} = req.body
    const arrays = await userModel.findById(userId).select(['likedStrangers', 'fans', 'matches'])
    try{
        let query = {}
        query = {_id:{ $ne: userId, $nin: arrays.likedStrangers, $nin: arrays.fans, $nin: arrays.matches}}
        if(filter.gender){
            query = {...query, gender: new mongoose.Types.ObjectId(filter.gender)}
        }
        if(filter.job){
            query = {...query, jobs: {$all: [new mongoose.Types.ObjectId(filter.job)]}}

        }
        if(filter.heightAbove && !filter.heightBelow){
            query = {...query, height: {$gt: filter.heightAbove}}
        }
        if(!filter.heightAbove && filter.heightBelow){
            query = {...query, height: {$lt: filter.heightBelow}}
        }
        if(filter.heightAbove && filter.heightBelow){
            query = {...query, height: {$gt: filter.heightAbove, $lt: filter.heightBelow}}
        }
        if(filter.dCityId){
            query = {...query, datingCity: new mongoose.Types.ObjectId(filter.dCityId)}
        }
        if(filter.hCityId){
            query = {...query, homeCity: new mongoose.Types.ObjectId(filter.hCityId)}
        }
        const response = await userModel.aggregate([  {$match:query}, {$sample: {size:  1}}, {$lookup: {
            from: "cities",
            localField:"datingCity",
            foreignField: "_id",
            as: "datingCity"
        },
            },
            {$lookup: {
                from: "jobs",
                localField:"jobs",
                foreignField: "_id",
                as: "jobs"
            },
            }
])

        if(response.length>0){
            return  res.status(200).json({success: true, values: {stranger: response[0]}})
        }else{
            return  res.status(404).json({err: true,errMsg: "Không tìm thấy người dùng nào theo yêu cầu của bạn"})
        }
    }catch(error){ 
        console.log(error)
        res.status(404).json({err: true, errMsg: "Lỗi hệ thống."})
    }
}
const saveFilter = async(req, res)=> {
    const {userId, filter} = req.body
    try{
         await userModel.updateOne({_id: userId}, {$set: {filter: filter}})
        return  res.status(200).json({filter})
    }catch(error){ 
        console.log(error)
        res.status(500).json({errMsg: "Lỗi máy chủ"})
    }
}
const saveDCityId_Filter = async(req, res)=> {
    const {userId, dCityId} = req.body

    try{
         await userModel.updateOne({_id: userId}, {$set: {"filter.dCityId": dCityId}})
        return  res.status(200).json({success: true})
    }catch(error){ 
        console.log(error)
        res.status(404).json({err: true, errMsg: "Lỗi hệ thống."})
    }
}
const fetchNewNotiCount = async(req, res)=> {
    const {userId} = req.body
    try{
        let newNotiCount = await Noti.find({recipientId: userId, isRead: false}).countDocuments()
        console.log({"newnoticount": newNotiCount})
        return  res.status(200).json({newNotiCount})
    }catch(error){ 
        console.log(error)
        res.status(500).json({err: true, errMsg: "Lỗi hệ thống."})
    }
}
const fetchNoti = async(req, res)=> {
    const {userId} = req.body
    try{
        let noti = await Noti.find({recipientId: userId}).sort( { 'createdAt': -1 } )
        return  res.status(200).json({noti})
    }catch(error){ 
        console.log(error)
        res.status(500).json({err: true, errMsg: "Lỗi hệ thống."})
    }
}
module.exports = {getDefaultHomeUsers, getInitialStrangers, updateNotiAsRead, getStranger, saveFilter, saveDCityId_Filter, fetchNewNotiCount, fetchNoti, removeMessageNoti}