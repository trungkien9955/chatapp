const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
        minlength: 3, 
        maxlength: 30
    },
    email: {
        type:String,
        required: true,
        minlength: 3,
        maxlength: 200,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 1024
    },
    mobile: {
        type: String,
        required: false,
        minlength: 10,
        maxlength: 20,
    },
    datingCity: {
        type: mongoose.Schema.Types.ObjectId,
        ref : "City",
    }, 
    homeCity: {
      type: mongoose.Schema.Types.ObjectId,
      ref : "City",
  },
  height: {
   type: Number,
   min: 0,
   max: 250,
},
weight: {
   type: Number,
   min: 0,
   max: 150,
},
     hobbyIds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref : "Hobby",
     }],
     profileImage: {
        type:String
     },
     galImages: [{
        type:String
     }],
     likedStrangers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref : "User",
     }],
     fans: [{
        type: mongoose.Schema.Types.ObjectId,
        ref : "User",
     }],
     matches: [{
      type: mongoose.Schema.Types.ObjectId,
      ref : "User",
   }],
     noti: [{
        type: mongoose.Schema.Types.ObjectId,
        ref : "Noti",
     }],
     chats: [{
        type: mongoose.Schema.Types.ObjectId,
        ref : "Chat",
     }],
     messageNoti: [],
     gender: {
      type: mongoose.Schema.Types.ObjectId,
      ref : "Gender",
   },
   datingGoals: [{
      type: mongoose.Schema.Types.ObjectId,
      ref : "DatingGoal",
   }],
   hobbies: [{
      type: mongoose.Schema.Types.ObjectId,
      ref : "Hobby",
   }],
   kidOption: {
      type: mongoose.Schema.Types.ObjectId,
      ref : "KidOption",
   },
   smokingOption: {
      type: mongoose.Schema.Types.ObjectId,
      ref : "SmokingOption",
   },
   drinkingOption: {
      type: mongoose.Schema.Types.ObjectId,
      ref : "DrinkingOption",
   },
   jobs: [{
      type: mongoose.Schema.Types.ObjectId,
      ref : "Job",
   }],
   eduOption: {
      type: mongoose.Schema.Types.ObjectId,
      ref : "Edu",
   },
   college: {
      type: mongoose.Schema.Types.ObjectId,
      ref : "College",
   },
   status: {
      type:String
   },
   isVerified: {
      type:Boolean, default: false
   },
   emailToken: {
      type:String
   }, 
   filter:  {
      gender: String,
      job: String,
      heightAbove: Number,
      heightBelow: Number,
      weightAbove: Number,
      weightBelow: Number,
      dCityId: String,
      hCityId: String,
   },
   bio: {
      type: String, 
      minlength: 1, 
      maxlength: 350
  },
  lastSeen: {
   type: Date, 
   },
   dob: {
   type: Date, 
   },
}, 
{
    timestamps: true,
}
);
const userModel = mongoose.model("User", userSchema);
module.exports = userModel;