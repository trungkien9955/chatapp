const userModel = require("../Models/userModel");
const bcrypt = require("bcrypt")
const crypto = require("crypto")
const validator = require("validator")
const jwt = require("jsonwebtoken");
const City = require("../Models/cityModel");
const District = require("../Models/districtModel");
const Ward = require("../Models/wardModel");
const { sendMail } = require("./mailController");
require('dotenv').config()
var mongoose = require('mongoose');
const createToken = (_id) => {
    const jwtkey = process.env.JWT_SECRET_KEY;
    return jwt.sign({_id}, jwtkey, {expiresIn: "3d"});
}
// const registerUser = async (req, res) => {
//     try{
//         const {name, email, password} = req.body;
//         let user = await userModel.findOne({email});
//         if(user) 
//         return res.status(400).json({status: "failed", error: "Email đã tồn tại."});
//         if(!name || !email || !password) 
//         return res.status(400).json({status: "failed", error: "Bạn cần cung cấp đầy đủ thông tin."});
//         if(!validator.isEmail((email))) 
//         return res.status(400).json({status: "failed", error: "Email không hợp lệ."});
//         // if(!validator.isStrongPassword((password)))
//         // return res.status(400).json("Mật khẩu yếu.");
//         user = new userModel({name, email, password})
//         const salt = await bcrypt.genSalt(10);
//         user.password   = await bcrypt.hash(user.password, salt);
//         await user.save();
//         const token = createToken(user._id);
//          res.status(200).json({_id: user._id, name, email, token})
//         //  res.status(200).json({status: "success", error: ""})


//     }catch(error){
//         console.log(error);
//         res.status(500).json(error)
//     }
// }
const registerUser = async (req, res) => {
    try{
        const {dCityId, email, password, name, genderId, dob} = req.body;
        let parsedDob = Date.parse(dob)
        if(parsedDob > Date.now())
        return res.status(400).json({errMsg: "Ngày sinh không hợp lệ."});
        console.log(parsedDob)
        let user = await userModel.findOne({email});
        if(user) 
        return res.status(400).json({errMsg: "Email này đã có người sử dụng."});
        if(!name || !email || !password) 
        return res.status(400).json({errMsg: "Bạn cần cung cấp đầy đủ thông tin."});
        if(!validator.isEmail((email))) 
        return res.status(400).json({errMsg: "Email không hợp lệ."});
        user = new userModel({name, email, password,datingCity: new mongoose.Types.ObjectId(dCityId), gender: new mongoose.Types.ObjectId(genderId), emailToken: crypto.randomBytes(64).toString("hex"), dob})
        let genderId_filter
        if(genderId == "65dca214d75b5575b7cd92e5"){
            genderId_filter = "65dca214d75b5575b7cd92e6"
        }else if(genderId == "65dca214d75b5575b7cd92e6"){
            genderId_filter = "65dca214d75b5575b7cd92e5"
        }
        user.filter = {
            gender: genderId_filter,
            job: "",
            heightAbove: null,
            heightBelow: null,
            weightAbove: null,
            weightBelow: null,
            dCityId: dCityId,
            hCityId: "",
        }
        const salt = await bcrypt.genSalt(10);
        user.password   = await bcrypt.hash(user.password, salt);
        await user.save();
        const mailOptions = {
            from: {
                name: 'Amo Dating',
                address: process.env.USER,
            },
            to: email, // list of receivers
            subject: "Xác nhận đăng ký tài khoản", // Subject line
            priority: 'high',
            html: `Xin chào ${user.name}, vui lòng bấm <a href = 'http://192.168.1.218:5173/verify-email?emailToken=${user.emailToken}'>vào đây</a> để hoàn tất đăng ký tài khoản.`, // html body
        }
        sendMail(mailOptions)
         res.status(200).json({success: true, values: {user: user}})
    }catch(error){
        console.log(error);
        res.status(500).json({errMsg: "Lỗi máy chủ."})
    }
}
const loginUser = async (req, res) => {
    const {email, password} = req.body;
    try{
        let user = await userModel.findOne({email: email}).populate(["hobbyIds", "datingCity", "likedStrangers", "fans", "gender", "datingGoals", "hobbies","kidOption","smokingOption","drinkingOption" ,"jobs","eduOption", "college","homeCity","noti", "messageNoti"]).exec();
        if(!user) return res.status(400).json("Invalid email or password!");
        const isValidPassword = await bcrypt.compare(password, user.password);
        if(!isValidPassword)
        return res.status(400).json("Invalid email or password!");
        const token = createToken(user._id);
        // res.status(200).json({_id: user._id, name: user.name, email, token, hobbies: user.hobbyIds, datingCity: user.cityId, profileImage: user.profileImage, galImages: user.galImages})
        res.status(200).json({user, token})

    }catch(error){
        console.log(error);
        res.status(500).json(error)
    }
}
const loginUser2 = async (req, res) => {
    const {email, password} = req.body;
    try{
        let user = await userModel.findOne ({email: email}).populate(["hobbyIds", "datingCity", "gender", "datingGoals", "hobbies","kidOption","smokingOption","drinkingOption" ,"jobs","eduOption", "college","homeCity",{
            path: "noti",
            options: {sort: {"createdAt": -1}}
        }, "messageNoti",{
            path: "chats",
            populate: {path: "members"}
        }]).exec();
        if(!user) return res.status(400).json({errMsg: "Email không đúng."});
        const isValidPassword = await bcrypt.compare(password, user.password);
        if(!isValidPassword)
        return res.status(400).json({errMsg: "Mật khẩu không đúng"});
        if(user.isVerified == false)
        return res.status(400).json({errMsg: "Tài khoản chưa được xác minh qua email."});
        const accessToken = jwt.sign({_id: user._id}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '30s'})
        const refreshToken = jwt.sign({_id: user._id}, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '30d'})

        // res.set("Access-Control-Allow-Credentials",true);
        res.cookie("jwt", refreshToken, {httpOnly: true, maxAge: 24*60*60*1000, sameSite: "None", secure: true})
        // res.status(200).json({_id: user._id, name: user.name, email, token, hobbies: user.hobbyIds, datingCity: user.cityId, profileImage: user.profileImage, galImages: user.galImages})
        res.status(200).json({user, accessToken, refreshToken})

    }catch(error){
        console.log(error);
        res.status(500).json("Lỗi máy chủ.")
    }
}
const changeName = async (req, res) => {
    const {newName, userId} = req.req;
    try{
        const response  = await userModel.updateOne({_id: userId}, {$set: {name: newName}});
        res.status(200).json(newName);
    }catch(error){
        console.log(error);
        res.status(500).json(error)
    }
}
const findUser = async (req, res) => {
    const userId = req.params.userId;
    try{
        const user = await userModel.findById(userId);
        res.status(200).json(user);
    }catch(error){
        console.log(error);
        res.status(500).json(error)
    }
}
const getUsers = async (req, res) => {
    const userId = req.params.userId;
    try{
        const users = await userModel.find();
        res.status(200).json(users);
    }catch(error){
        console.log(error);
        res.status(500).json(error)
    }
}
const getAllProducts = async (req, res) => {
    try{
        const users = await userModel.find();
        res.status(200).json(users);
    }catch(error){
        console.log(error);
        res.status(500).json(error)
    }
}
const addData = async(req, res)=>{
    const data = req.body;
    try {
          data?.forEach((item) =>{
            let cityId = item.id
            let cityName = item.name
            // cityModel.insertOne({_id: cityId, name: cityName})
            const cityDocument = new City({alt_id: cityId, name: cityName})
             cityDocument.save()
        })
        res.status(200).json({message: "Lưu dữ liệu thành công"})
    }catch(error){
        res.status(500).json(error)
    }
}
const addDistricts = async(req, res)=>{
    const data = req.body;
    try {
          data?.forEach((item) =>{
            let districtId = item.id
            let districtName = item.name
            let cityId = item.province_id

            // cityModel.insertOne({_id: cityId, name: cityName})
            const DistrictDocument = new District({_id: districtId, name: districtName, cityId: cityId })
            DistrictDocument.save()
        })
        res.status(200).json({message: "Lưu dữ liệu thành công"})
    }catch(error){
        res.status(500).json(error)
    }
}
const addWards = async(req, res)=>{
    const data = req.body;
    try {
          data?.forEach((item) =>{
            let wardId = item.id
            let wardName = item.name
            let districtId = item.district_id

            // cityModel.insertOne({_id: cityId, name: cityName})
            const wardDocument = new Ward({_id: wardId, name: wardName, districtId: districtId })
            wardDocument.save()
        })
        res.status(200).json({message: "Lưu dữ liệu thành công"})
    }catch(error){
        res.status(500).json(error)
    }
}
// const verifyEmail = async(req, res)=>{
//     let token = req.params.id;
//     if(token){
//         try{
//           let decoded =  jwt.verify(token, process.env.JWT_SECRET_KEY)
//           let _id = decoded._id
//           let user = await userModel.findById(_id)
//         }catch(error){
//             console.log(error)
//         }
//     }
// }
const verifyEmail = async(req, res)=>{

    try{
    let emailToken = req.body.emailToken;
    if(!emailToken) return res.status(400).json({errMsg: "Không tìm thấy mã xác minh."})
    const user = await userModel.findOne({emailToken: emailToken})
    if(user){
        await userModel.updateOne({emailToken: emailToken}, {$set: {isVerified: true}})
        res.status(200).json({values: {user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            isVerified: true
        }}})
    }else{
        return res.status(400).json({errMsg: "Mã xác minh không đúng."})
    }
    }catch(error){
        console.log(error)
    }
    
}
const handleRefresh = async(req, res)=>{
    const {refreshToken} = req.body
    if(!refreshToken) return res.sendStatus(401)
    console.log("has token")

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, async(error, decoded)=>{
        if(error) return res.sendStatus(401)
        let _id = decoded._id
        const accessToken = jwt.sign({_id: _id}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '30s'})
        console.log("refresh success")
        res.status(200).json({accessToken})
    })

}
const handleRefreshFormData = async(req, res)=>{
    const refreshToken = req.headers['refresh']
    if(!refreshToken) return res.sendStatus(401)
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, async(error, decoded)=>{
        console.log("start verify rf token form data")

        if(error) return res.sendStatus(401)
        let _id = decoded._id
        const accessToken = jwt.sign({_id: _id}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '30s'})
        console.log("refresh form data ends")
        res.status(200).json({accessToken})
    })

}

const fetchFans = async(req, res)=>{
    const {userId} = req.body
    try{
        const user = await userModel.findById(userId).populate("fans", {name: 1, profileImage: 1 }).populate("datingCity")
        const fans = user.fans
        return res.status(200).json({fans})
    }catch(error){
        console.log(error)
        return res.status(500).json({errMsg: "Lỗi máy chủ"})
    }

}
const fetchMatches = async(req, res)=>{
    const {userId} = req.body
    try{
        const user = await userModel.findById(userId).populate("matches", {name: 1, profileImage: 1 }).populate("datingCity")
        const matches = user.matches
        return res.status(200).json({matches})
    }catch(error){
        console.log(error)
        return response.status(500).json({errMsg: "Lỗi máy chủ"})
    }

}
const fetchLikedStrangers = async(req, res)=>{
    const {userId} = req.body
    try{
        const user = await userModel.findById(userId).populate("likedStrangers", {name: 1, profileImage: 1 }).populate("datingCity")
        const likedStrangers = user.likedStrangers
        return res.status(200).json({likedStrangers})
    }catch(error){
        console.log(error)
        return response.status(500).json({errMsg: "Lỗi máy chủ"})
    }
}
const getMessageNoti = async(req, res)=>{
    const {userId} = req.body
    try{
        const user = await userModel.findById(userId).select(['messageNoti'])
        const messageNoti = user.messageNoti
        return res.status(200).json({messageNoti})
    }catch(error){
        console.log(error)
        return res.status(500).json({errMsg: "Lỗi máy chủ"})
    }

}
module.exports = {registerUser, loginUser, findUser, getUsers, addData, addDistricts, addWards, getAllProducts, verifyEmail, loginUser2, handleRefresh, handleRefreshFormData, fetchFans,fetchMatches, fetchLikedStrangers, getMessageNoti};