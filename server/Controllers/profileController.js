const userModel = require("../Models/userModel");
const City = require("../Models/cityModel");

var fs = require("fs")
var path = require("path");
const Noti = require("../Models/notiModel");
const Gender = require("../Models/genderModel");
const DatingGoal = require("../Models/datingGoalModel");
const Hobby = require("../Models/hobbyModel");
const KidOption = require("../Models/kidOptionModel");
const SmokingOption = require("../Models/smokingOptionModel");
const DrinkingOption = require("../Models/drinkingOptionModel");
const Job = require("../Models/jobModel");
const Edu = require("../Models/eduModel");
const College = require("../Models/collegeModel");
const saveDatingCity = async (req,res) =>{
    const {userId, datingCityId} = req.body
    try{
        const newDatingCity = await City.findById(datingCityId)
        await userModel.updateOne({_id: userId}, {$set: {datingCity: datingCityId}})
        res.status(200).json(newDatingCity)
        console.log("success")

    }catch(error){
        console.log(error)
        res.status(500).json("Đã xảy ra lỗi.")
    }
}
const saveHomeCity = async(req, res)=> {
    const {userId, homeCityId} = req.body
    try{
        const homeCity = await City.findById(homeCityId)
        await userModel.updateOne({_id: userId}, {$set: {homeCity: homeCityId}})
        return  res.status(200).json({success: true, values: {homeCity: homeCity}})
    }catch(error){ 
        res.status(404).json({err: true, errMsg: "Lỗi hệ thống."})
    }
}
const saveHeight = async(req, res)=> {
    const {userId, height} = req.body
    try{
        await userModel.updateOne({_id: userId}, {$set: {height: height}})
        return  res.status(200).json({success: true, values: {height: height}})
    }catch(error){ 
        res.status(404).json({err: true, errMsg: "Lỗi hệ thống."})
    }
}
const saveWeight = async(req, res)=> {
    const {userId, weight} = req.body
    try{
        await userModel.updateOne({_id: userId}, {$set: {weight: weight}})
        return  res.status(200).json({success: true, values: {weight: weight}})
    }catch(error){ 
        res.status(404).json({err: true, errMsg: "Lỗi hệ thống."})
    }
}
const saveGender = async (req,res) =>{
    const {userId, genderId} = req.body
    try{
        const newGender = await Gender.findById(genderId)
        await userModel.updateOne({_id: userId}, {$set: {gender: genderId}})
        res.status(200).json(newGender)

    }catch(error){
        console.log(error)
        res.status(500).json("Đã xảy ra lỗi.")
    }
}
const saveDatingGoals = async (req,res) =>{
    const {userId, datingGoals} = req.body
    console.log(datingGoals)

    try{
        await userModel.findOneAndUpdate({_id: userId}, {$set: {datingGoals: datingGoals}})
        const user = await userModel.findById(userId).populate("datingGoals")
        const newDatingGoals = user.datingGoals
        console.log("success")
                res.status(200).json(newDatingGoals)
        // console.log(user)
    }catch(error){
        console.log(error)
        res.status(500).json("Đã xảy ra lỗi.")
    }
}
const saveProfileImage = async(req, res)=> {
    try{
        const {userId, fileName, ext} = req.body
        const user = await userModel.findById(userId)
        const oldProfileImage = user.profileImage
        if(fs.existsSync(`/xampp/htdocs/chat-app/server/assets/images/profile_images/${oldProfileImage}`)){
            let filePath = `/xampp/htdocs/chat-app/server/assets/images/profile_images/${oldProfileImage}`
            fs.unlinkSync(filePath)
        }
        await userModel.updateOne({_id: userId}, {$set: {profileImage: fileName+"."+ext}})
        res.status(200).json({profileImage: fileName+"."+ext})

    }catch(error){
        console.log(error)
        res.status(500).json({errorMsg: "Lỗi máy chủ"})
    }
}
const saveGalImages = async(req, res)=> {
    try{
        const user = await userModel.findById(req.body.userId)
        const galImages = user.galImages
        res.status(200).json({galImages})
    }catch(error){
        console.log(error)
        res.status(500).json({errMsg: "Lỗi máy chủ"})
    }
}
const removeGalImage = async(req, res)=> {
    try{
       const {galImage} = req.body

        await userModel.updateOne({_id: req.body.userId}, {$pull: {galImages: galImage}})
        if(fs.existsSync(`/xampp/htdocs/chat-app/server/assets/images/gal_images/${galImage}`)){
            let filePath = `/xampp/htdocs/chat-app/server/assets/images/gal_images/${galImage}`
            fs.unlinkSync(filePath)
        }
          const user = await userModel.findById(req.body.userId)
          const galImages = user.galImages
        res.status(200).json({galImages: galImages})
    }catch(error){
        console.log(error)
        res.status(500).json({errMsg: "Lỗi máy chủ."})
    }
}
const changeName = async (req, res) => {
    const {newName, userId} = req.body;
    try{
        const response  = await userModel.updateOne({_id: userId}, {$set: {name: newName}});
        res.status(200).json(newName);
    }catch(error){
        console.log(error);
        res.status(500).json(error)
    }
}
const saveName = async (req, res) => {
    const {userId, name} = req.body;
    try{
        await userModel.updateOne({_id: userId}, {$set: {name: name}});
        res.status(200).json({status: "success", values: {name: name}});
    }catch(error){
        console.log(error);
        res.status(500).json(error)
    }
}
const saveDob = async (req, res) => {
    const {userId, dob} = req.body;
    try{
        const parsedDob  =  Date.parse(dob)
        if(parsedDob > Date.now())
        return res.status(400).json({errMsg: "Ngày sinh không hợp lệ."})
        await userModel.updateOne({_id: userId}, {$set: {dob: parsedDob}});
        res.status(200).json({dob});
    }catch(error){
        console.log(error);
        res.status(500).json({errMsg: "Lỗi máy chủ"})
    }
}
const saveBio = async (req, res) => {
    const {userId, bio} = req.body;
    try{
        await userModel.updateOne({_id: userId}, {$set: {bio: bio}});
        res.status(200).json({success: true, data: {bio: bio}});
    }catch(error){
        console.log(error);
        res.status(404).json({err: true, errMsg: "Lỗi máy chủ."})
    }
}
const saveLikedStrangers = async(req, res)=> {
    const {userId, strangerId} = req.body
    try{
        const user = await userModel.findById(userId)
        const stranger = await userModel.findById(strangerId)
        if(!user.likedStrangers.includes(strangerId)) {
            await userModel.updateOne({_id: userId}, {$push: {likedStrangers: strangerId} })
        }
        if(!stranger.fans.includes(userId)) {
            const newNoti = new Noti({
                    senderId:userId,
                    recipientId: strangerId,
                    senderName: user.name,
                    recipientName: stranger.name,
                    image: user.profileImage,
                    text: `${user.name} đã thích bạn.`,
                    type: "like",
                    isRead: false,
            })
            await newNoti.save()
            const currentTime = Date.now()
            await userModel.updateOne({_id: strangerId}, {$push: {fans: userId, noti: newNoti._id }, $set: {lastSeen: currentTime} } )
            const updatedUser = await userModel.findById(userId).populate(["likedStrangers", "noti"])
            const likedStrangers = updatedUser.likedStrangers
            res.status(200).json({likedStrangers, noti: newNoti, lastSeen: currentTime})
        }
        
    }catch(error){
        console.log(error)
        res.status(500).json({err: true, errMsg: "Lỗi máy chủ."})
    }
}
const removeLikedStranger = async(req, res)=> {
    const {userId, strangerId} = req.body
    try{
        const user = await userModel.findById(userId)
        const stranger = await userModel.findById(strangerId)
        if(user.likedStrangers.includes(strangerId)) {
            await userModel.updateOne({_id: userId}, {$pull: {likedStrangers: strangerId}})
        }
        if(stranger.fans.includes(userId)) {
            await userModel.updateOne({_id: strangerId}, {$pull: {fans: userId} } )
        }
        res.status(200).json({strangerId: stranger._id, strangerName: stranger.name})
    }catch(error){
        console.log(error)
        res.status(500).json({errMsg: "Lỗi máy chủ"})
    }
}
const removeFan = async(req, res)=> {
    const {userId, strangerId} = req.body
    try{
    const user = await userModel.findById(userId).select([ 'name','profileImage','fans'])
    const fans = user.fans
    if(!fans.includes(strangerId))
    return res.status(400).json({errMsg: "Người dùng này không còn trong danh sách."})
        const stranger = await userModel.findById(strangerId)
        if(user.fans.includes(strangerId)) {
            await userModel.updateOne({_id: userId}, {$pull: {fans: strangerId}})
        }
        if(stranger.likedStrangers.includes(userId)) {
            await userModel.updateOne({_id: strangerId}, {$pull: {likedStrangers: userId} } )
        }
        const newNoti = new Noti({
            senderId:userId,
            recipientId: strangerId,
            senderName: user.name,
            recipientName: stranger.name,
            image: user.profileImage,
            text: `${user.name} đã từ chối.`,
            type: "reject",
            isRead: false,
    })
    await newNoti.save()
        res.status(200).json({strangerId: stranger._id, strangerName: stranger.name, noti:newNoti})
    }catch(error){
        console.log(error)
        res.status(500).json({errMsg: "Lỗi máy chủ"})
    }
}
const getStrangerProfile = async(req, res)=> {
    const {strangerId} = req.params
    try{
        const stranger = await userModel.findById(strangerId).populate(["hobbyIds", "datingCity", "likedStrangers", "fans"])
        if(stranger){
            res.status(200).json(stranger)
        }
    }catch(error){
        console.log(error)
        res.status(500).json(error)
    }
}
const getStrangerProfile2 = async(req, res)=> {
    const {strangerId} = req.body
    try{
        const stranger = await userModel.findById(strangerId).populate(["hobbyIds", "datingCity", "gender", "datingGoals", "hobbies","kidOption","smokingOption","drinkingOption" ,"jobs","eduOption", "college","homeCity"])
        if(stranger){
            res.status(200).json({stranger})
        }else{
            res.sendStatus(404)
        }
    }catch(error){
        console.log(error)
        res.status(500).json({errMsg: "Lỗi máy chủ"})
    }
}
const getGenders = async(req, res)=>{
    try{
        const genders = await Gender.find()
        res.status(200).json(genders)
    }catch(error){
        res.status(500).json(error)
    }
}
const getDatingGoals = async(req, res)=>{
    try{
        const datingGoals = await DatingGoal.find()
        res.status(200).json(datingGoals)
    }catch(error){
        res.status(500).json(error)
    }
}
const getHobbies = async(req, res)=>{
    try{
        const hobbies = await Hobby.find()
        res.status(200).json(hobbies)
    }catch(error){
        res.status(500).json(error)
    }
}
const searchHobbies = async(req, res)=> {
    const {query} = req.body
    let regexQuery = "^"+query
    try{
        const response = await Hobby.find({name: {$regex: regexQuery, $options: "i"}})

        res.status(200).json(response)
    }catch(error){
        res.status(500).json(error)
    }
}
const searchJobs = async(req, res)=> {
    const {query} = req.body
    let regexQuery = "^"+query
    try{
        const response = await Job.find({name: {$regex: regexQuery, $options: "i"}})
        res.status(200).json(response)
    }catch(error){
        res.status(500).json(error)
    }
}
const searchColleges = async(req, res)=> {
    const {query} = req.body
    let regexQuery = "^"+query
    try{
        const response = await College.find({name: {$regex: query, $options: "i"}})
        res.status(200).json(response)
    }catch(error){
        res.status(500).json(error)
    }
}
const saveHobbies = async(req, res) => {
    const {userId, hobbyIdArray} = req.body
    try{
        if(hobbyIdArray.length == 0){
            await userModel.findOneAndUpdate({_id: userId}, {$set: {hobbies: []}})
            res.status(200).json({status: "success", values: {hobbies: [], hobbyIdArray: []}})
        }else if(hobbyIdArray.length > 0){
            const hobbies = await Hobby.find({_id: {$in: hobbyIdArray}})
            await userModel.findOneAndUpdate({_id: userId}, {$set: {hobbies: hobbyIdArray}})
            res.status(200).json({status: "success", values: {hobbies: hobbies, hobbyIdArray: hobbyIdArray}})
        }
    }catch(error){
        console.log(error)
        res.status(500).json(error)
    }
}
const getKidOptions = async(req, res)=>{
    try{
        const kidOptions = await KidOption.find()
        res.status(200).json(kidOptions)
    }catch(error){
        res.status(500).json(error)
    }
}
const saveKidOpt = async (req,res) =>{
    const {userId, kidOptId} = req.body
    try{
        const kidOpt = await KidOption.findById(kidOptId)
        await userModel.updateOne({_id: userId}, {$set: {kidOption: kidOpt._id}})
        res.status(200).json({status: "success", values: kidOpt})
    }catch(error){
        console.log(error)
        res.status(500).json("Đã xảy ra lỗi.")
    }
}
const getSmokingOptions = async(req, res)=>{
    try{
        const smokingOptions = await SmokingOption.find()
        res.status(200).json(smokingOptions)
    }catch(error){
        res.status(500).json(error)
    }
}
const getJobs = async(req, res)=>{
    try{
        const jobs = await Job.find()
        res.status(200).json(jobs)
    }catch(error){
        res.status(500).json(error)
    }
}
const saveSmokingOpt = async (req,res) =>{
    const {userId, smokingOptId} = req.body
    try{
        const smokingOpt = await SmokingOption.findById(smokingOptId)
        await userModel.updateOne({_id: userId}, {$set: {smokingOption: smokingOpt._id}})
        res.status(200).json({status: "success", data: smokingOpt})
    }catch(error){
        console.log(error)
        res.status(500).json("Đã xảy ra lỗi.")
    }
}
const getDrinkingOptions = async(req, res)=>{
    try{
        const drinkingOptions = await DrinkingOption.find()
        res.status(200).json(drinkingOptions)
    }catch(error){
        res.status(500).json(error)
    }
}
const saveDrinkingOpt = async (req,res) =>{
    const {userId, drinkingOptId} = req.body
    try{
        const drinkingOpt = await DrinkingOption.findById(drinkingOptId)
        await userModel.updateOne({_id: userId}, {$set: {drinkingOption: drinkingOpt._id}})
        res.status(200).json({status: "success", values: drinkingOpt})
    }catch(error){
        console.log(error)
        res.status(500).json("Đã xảy ra lỗi.")
    }
}
const saveJobs = async(req, res) => {
    const {userId, jobIdArray} = req.body
    try{
        if(jobIdArray.length == 0){
            await userModel.findOneAndUpdate({_id: userId}, {$set: {jobs: []}})
            res.status(200).json({status: "success", values: {jobs: [], jobIdArray: jobIdArray}})
        }else if(jobIdArray.length > 0){
            await userModel.findOneAndUpdate({_id: userId}, {$set: {jobs: jobIdArray}})
            // let objectIdArr = jobIdArray.map((id)=> ObjectId(id))
            const jobs = await Job.find({_id: {$in: jobIdArray}})
            res.status(200).json({status: "success", values: {jobs: jobs, jobIdArray: jobIdArray}})
        }
    }catch(error){
        console.log(error)
        res.status(500).json(error)
    }
}
const getEduOptions = async(req, res)=>{
    try{
        const eduOptions = await Edu.find()
        res.status(200).json(eduOptions)
    }catch(error){
        res.status(500).json(error)
    }
}
const saveEduOpt = async (req,res) =>{
    const {userId, eduOptId} = req.body
    try{
        const eduOpt = await Edu.findById(eduOptId)
        await userModel.updateOne({_id: userId}, {$set: {eduOption: eduOpt._id}})
        res.status(200).json({status: "success", values: {eduOpt:eduOpt}})
    }catch(error){
        console.log(error)
        res.status(500).json("Đã xảy ra lỗi.")
    }
}
const getColls = async(req, res)=>{
    try{
        const colls = await College.find()
        res.status(200).json(colls)
    }catch(error){
        res.status(500).json(error)
    }
}
const saveCollegeOpt = async (req,res) =>{
    const {userId, collId} = req.body
    try{
        if(!collId){
            await userModel.updateOne({_id: userId}, {$set: {college: null}})
            res.status(200).json({status: "success", values: {coll:null}})
        }else{
            const coll = await College.findById(collId)
            await userModel.updateOne({_id: userId}, {$set: {college: collId}})
            res.status(200).json({status: "success", values: {coll:coll}})
        }
    }catch(error){
        console.log(error)
        res.status(500).json("Đã xảy ra lỗi.")
    }
}
const updateLastSeen = async (req,res) =>{
    const {userId, lastSeen} = req.body
    console.log(userId, lastSeen)
    try{
    if(lastSeen && userId){
        await userModel.updateOne({_id: userId}, {$set: {lastSeen: lastSeen}})
    }
    res.status(200).json({lastSeen})
    }catch(error){
        console.log(error)
        res.status(500).json({errMsg: "Lỗi máy chủ"})
    }
}

module.exports = {saveDatingCity, saveProfileImage, saveGalImages, removeGalImage, changeName, saveLikedStrangers, removeLikedStranger, getStrangerProfile, getGenders, saveGender, getDatingGoals, saveDatingGoals, getHobbies,searchHobbies, saveHobbies, getKidOptions, saveKidOpt, getSmokingOptions, saveSmokingOpt, getDrinkingOptions, saveDrinkingOpt, searchJobs, saveJobs, getEduOptions, saveEduOpt, getColls, searchColleges, saveCollegeOpt, saveName, getJobs, saveHomeCity, saveHeight, saveWeight, saveBio, getStrangerProfile2, updateLastSeen, saveDob, removeFan}