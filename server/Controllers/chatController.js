const userModel = require("../Models/userModel");
const Chat = require("../Models/chatModel");
const Message = require("../Models/messageModel");
const { default: mongoose } = require("mongoose");
const Noti = require("../Models/notiModel");

const createChat = async(req, res) => {
    const {userId, strangerId} = req.body;
    try{
        const chat = await Chat.findOne({
            members: {$all: [userId, strangerId]}
        })
        if(chat)  return res.status(200).json(chat)
        const newChat = new Chat({
            members: [userId, strangerId]
        })
        await newChat.save()
        const response = await Chat.findOne({
            members: {$all: [userId, strangerId]}
        }).populate("members")
        const user = await userModel.findById(userId)
        const stranger = await userModel.findById(strangerId)
        await userModel.updateOne({_id: userId}, {$push: {chats: response._id} })
        await userModel.updateOne({_id: strangerId}, {$push: {chats: response._id} })
        res.status(200).json(response)
    }catch(error){
        console.log(error)
        res.status(500).json(error)
    }
}
const createMatch = async(req, res) => {
    const {userId, strangerId} = req.body;
    const user = await userModel.findById(userId).select(['name', 'fans', 'profileImage'])
    const fans = user.fans
    console.log(fans)
    if(!fans.includes(strangerId))
    return res.status(400).json({errMsg: "Người dùng này không còn trong danh sách."})
    try{
        const chat = await Chat.findOne({
            members: {$all: [userId, strangerId]}
        })
        if(chat)
        return res.status(400).json({errMsg: "Đã tạo chat trước đó"})
        const newChat = new Chat({
            members: [userId, strangerId]
        })
        await newChat.save()
        const updatedChat = await Chat.findOne({
            members: {$all: [userId, strangerId]}
        }).populate("members")
        //create new noti
        const stranger =  await userModel.findById(strangerId).select(['name'])
        const newNoti = new Noti({
            senderId:userId,
            recipientId: strangerId,
            senderName: user.name,
            recipientName: stranger.name,
            image: user.profileImage,
            text: `${user.name} đã match với bạn.`,
            type: "match",
            isRead: false,
    })
    await newNoti.save()
        await userModel.updateOne({_id: userId}, {$push: {chats: updatedChat._id}, $push: {matches: strangerId}, $pull: {fans: strangerId} })
        await userModel.updateOne({_id: strangerId}, {$push: {chats: updatedChat._id}, $push: {matches: userId}, $pull: {likedStrangers: userId} })
        res.status(200).json({chatId: updatedChat._id, strangerId, noti: newNoti})
    }catch(error){
        console.log(error)
        res.status(500).json({errMsg: "Lỗi máy chủ"})    }
}
const removeMatch = async(req, res) => {
    const {userId, strangerId} = req.body;
    const user = await userModel.findById(userId).select(['name', 'matches', 'profileImage'])
    const matches = user.matches
    if(!matches.includes(strangerId))
    return res.status(400).json({errMsg: "Người dùng này không còn trong danh sách Match."})
    try{
        const chat = await Chat.findOne({
            members: {$all: [userId, strangerId]}
        })
         await Chat.deleteOne({
            members: {$all: [userId, strangerId]}
        })
        await Message.deleteMany({
            senderId: userId, recipientId: strangerId
        })
        await Message.deleteMany({
            senderId: strangerId, recipientId: userId
        })
        const stranger =  await userModel.findById(strangerId).select(['name'])
        const newNoti = new Noti({
            senderId:userId,
            recipientId: strangerId,
            senderName: user.name,
            recipientName: stranger.name,
            image: user.profileImage,
            text: `${user.name} đã hủy match với bạn.`,
            type: "remove-match",
            isRead: false,
        })
        await newNoti.save()
        await userModel.updateOne({_id: userId}, { $pull: {matches: strangerId} })
        await userModel.updateOne({_id: strangerId}, { $pull: {matches: userId} })
        res.status(200).json({chatId: chat._id, strangerId, noti: newNoti})
    }catch(error){
        console.log(error)
        res.status(500).json({errMsg: "Lỗi máy chủ"})    }
}
const findUserChats = async (req, res) => {
    const userId = req.params.userId
    try {
        const chats = await chatModel.find({
            members: {$in: [userId]}
        })
        res.status(200).json(chats)
    }catch(error){
        console.log(error)
        res.status(500).json(error)
    }
}
const fetchChats = async (req, res) => {
    const {userId} = req.body
    try {
        console.log(userId)
        let chats = await Chat.find({
            members: {$in: [userId]}
        }).populate("members")
        res.status(200).json({chats})
    }catch(error){
        console.log(error)
        res.status(500).json({errMsg: "Lỗi máy chủ"})
    }
}
const fetchMessageNoti = async (req, res) => {
    const {userId} = req.body
    try {
        const user = await userModel.findById(userId).select(['messageNoti'])
        let messageNoti = user.messageNoti
        res.status(200).json({messageNoti})
    }catch(error){
        console.log(error)
        res.status(500).json({errMsg: "Lỗi máy chủ"})
    }
}
const findChat = async (req, res) => {
    const {firstId, secondId} = req.params
    try {
        const chat = await chatModel.find({
            members: {$all: [firstId, secondId]}
        })
        res.status(200).json(chat)
    }catch(error){
        console.log(error)
        res.status(500).json(error)
    }
}

const createMessage = async(req, res)=>{
    const {chatId, senderId, recipientId, text} = req.body
    const newMessage = new Message({
        chatId, senderId,recipientId, text
    })
    try{

        const message = await newMessage.save()
        const stranger = await userModel.findById(recipientId).select(['messageNoti'])
        const messageNoti = stranger.messageNoti
        if(!messageNoti.includes(chatId)){
            await userModel.updateOne({_id: recipientId}, {$push: {messageNoti: chatId} })
        }
        console.log(message)
        res.status(200).json({message})
    }catch(error){
        res.status(500).json({errMsg: "Lỗi máy chủ"})
    }
}
const getMessages = async(req, res)=>{
    const {chatId} = req.params
    try {
        console.log(chatId)
        const messages = await Message.find({chatId: chatId})
        res.status(200).json({messages})
    }catch(error){
        console.log(error)
    }
} 
const addMessageNoti = async(req, res)=>{
    const {userId, chatId} = req.body
    try{
        const user = await userModel.findById(userId)

        if(user){
            const messageNoti = user.messageNoti
            if(!messageNoti.includes(chatId)){
                await userModel.updateOne({_id: userId}, {$push: {messageNoti: chatId} })
                res.status(200).json(chatId)
            }
        }
        
    }catch(error){
        res.status(500).json(error)
    }
}
const getLastMessageTime = async(req, res)=> {
    const {chatId} = req.body
    console.log(chatId)
    try{
        const lastMessage = await Message.find({chatId: chatId}, {}, {sort: {_id: -1}, limit: 1})
        const lastMessageTime = lastMessage[0].createdAt
        res.status(200).json(lastMessageTime)
    }catch(error){
        console.log(error)
    }
}
module.exports = {createChat, findUserChats, findChat, createMessage, getMessages, addMessageNoti, getLastMessageTime, createMatch, fetchChats, removeMatch,fetchMessageNoti}