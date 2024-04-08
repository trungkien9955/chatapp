const express = require("express");
const multer = require("multer")
const path = require("path")
var bodyParser = require('body-parser')
const userModel = require("../Models/userModel");

var urlencodedParser = bodyParser.urlencoded({ extended: true })
 
//store profile image
const profileImageStorage = multer.diskStorage({
    destination: (res, file, cb)=> {
        cb(null, "assets/images/profile_images")
    },
    filename: (req, file, cb)=> {
        
        cb(null, req.body.fileName+path.extname(file.originalname))
    }
})
const uploadProfileImage = multer({
    storage: profileImageStorage,
    limits: {
        fileSize: 5000000
    },
    fileFilter: (req, file, cb) => {
        if (file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/png' && file.mimetype !== 'image/jpg') {
          const err = new Error();
          return cb(err, false);
        }
        cb(null, true);
      }
})
const galImagesStorage = multer.diskStorage({
    destination: (res, file, cb)=> {
        cb(null, "assets/images/gal_images")
    },
    filename: async (req, file, cb)=> {
        let {fileName, userId} = req.body
        let name = fileName+Date.now()+path.extname(file.originalname)
        await userModel.updateOne({_id: userId}, {$push: {"galImages": name}})
        cb(null,name)
    }
})
const uploadGalImages = multer({
    storage: galImagesStorage,
    limits: {
        fileSize: 5000000
    },
    fileFilter: (req, file, cb) => {
        if (file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/png' && file.mimetype !== 'image/jpg') {
          const err = new Error();
          return cb(err, false);
        }
        cb(null, true);
      }
})
const {saveDatingCity, saveProfileImage, saveGalImages, removeGalImage, changeName, saveLikedStrangers, removeLikedStranger, getStrangerProfile, getGenders, saveGender, getDatingGoals, saveDatingGoals, getHobbies, getHobbySearchResults, searchHobbies, saveHobbies, getKidOptions, saveKidOpt, getSmokingOptions, saveSmokingOpt, getDrinkingOptions, saveDrinkingOpt, searchJobs, saveJobs, getEduOptions, saveEduOpt, getColls, searchColleges, saveCollegeOpt, saveName, getJobs, saveHomeCity, saveHeight, saveWeight, saveBio, getStrangerProfile2, updateLastSeen, saveDob, removeFan} = require("../Controllers/profileController");
const { sendMail } = require("../Controllers/mailController");
const { saveFilter } = require("../Controllers/homeController");
const verifyJWT = require("../Middlewares/verifyJWT");
const router = express.Router();
router.post("/save-dating-city", saveDatingCity)
router.post("/save-home-city", saveHomeCity)
router.post("/save-profile-image",verifyJWT, (req, res, next)=>{
    uploadProfileImage.single('profileImage')(req, res, err =>{
        if (err instanceof multer.MulterError) {
            if(err.code == "LIMIT_FILE_SIZE"){
               return res.status(400).json({errMsg: "Dung lượng ảnh quá lớn (> 5MB)."})
            }
        } else if (err) {
            console.log("wrong type")
            // An unknown error occurred when uploading.
           return res.status(400).json({errMsg: "Ảnh không đúng định dạng, chỉ chấp nhận jpg, jpeg, png."})
        }
        next()
    })
}, saveProfileImage)

// router.post("/save-gal-images",urlencodedParser, uploadGalImages.array('galImages[]'), saveGalImages)
router.post("/save-gal-images",verifyJWT,urlencodedParser,(req, res, next)=>{
    uploadGalImages.array('galImages[]', 9)(req, res, err =>{
        if (err instanceof multer.MulterError) {
            if(err.code == "LIMIT_FILE_SIZE"){
               return res.status(400).json({errMsg: "Dung lượng ảnh quá lớn (> 5MB)."})
            }
        } else if (err) {
            console.log("wrong type")
            // An unknown error occurred when uploading.
           return res.status(400).json({errMsg: "Ảnh không đúng định dạng, chỉ chấp nhận jpg, jpeg, png."})
        }
        next()
    })
} , saveGalImages)
router.post("/remove-gal-image", verifyJWT,removeGalImage)
router.post("/change-name", changeName)
router.post("/save-liked-strangers", saveLikedStrangers)
router.post("/remove-fan", removeFan)
router.post("/remove-liked-stranger", removeLikedStranger)
router.get("/get-stranger-profile/:strangerId", getStrangerProfile)
router.post("/get-stranger-profile2", getStrangerProfile2)

router.get("/genders", getGenders)
router.post("/save-gender", verifyJWT, saveGender)
router.get("/dating-goals", getDatingGoals)
router.post("/save-dating-goals", saveDatingGoals)
// router.get("/hobbies", getHobbies)
router.get("/hobbies", verifyJWT, getHobbies)
router.post("/search-hobbies",verifyJWT, searchHobbies)
router.post("/save-hobbies",verifyJWT, saveHobbies)
router.get("/kid-options", getKidOptions)
router.post("/save-kid-option", saveKidOpt)
router.get("/smoking-options", getSmokingOptions)
router.post("/save-smoking-option", saveSmokingOpt)
router.get("/drinking-options", getDrinkingOptions)
router.post("/save-drinking-option", saveDrinkingOpt)
router.post("/search-jobs", searchJobs)
router.post("/save-jobs", saveJobs)
router.get("/jobs", getJobs)
router.get("/edu-options", getEduOptions)
router.post("/save-edu-option", saveEduOpt)
router.get("/colleges", getColls)
router.post("/search-colleges", searchColleges)
router.post("/save-college-option", saveCollegeOpt)
router.post("/save-name", saveName)
router.post("/save-dob", saveDob)
router.post("/save-bio", verifyJWT, saveBio)

router.get("/send-mail", sendMail)
router.post("/save-height", saveHeight)
router.post("/save-weight", verifyJWT,saveWeight)
router.post("/save-filter", saveFilter)
router.post("/update-last-seen", updateLastSeen)


module.exports = router;