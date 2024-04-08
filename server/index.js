const express = require("express");
const corsOptions = {
    credentials: true,
    origin: 'http://192.168.1.218:5173',
    
    optionSuccessStatus:200,

}
const cors = require("cors", corsOptions); 
const mongoose = require("mongoose");
const multer = require("multer")
const path = require("path")
const bodyParser = require('body-parser')
const userRoute = require("./Routes/userRoute");
const chatRoute = require("./Routes/chatRoute")
const messageRoute = require("./Routes/messageRoute")
const dataRoute = require("./Routes/dataRoute")
const profileRoute = require("./Routes/profileRoute")
const homeRoute = require("./Routes/homeRoute")
const statsRoute = require("./Routes/statsRoute");
const credentials = require("./Middlewares/credentials");
const app = express();
require("dotenv").config();
app.use(express.json())
app.use(credentials)
app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// app.use(function (req, res) {
//     res.setHeader('Content-Type', 'text/plain')
//     res.write('you posted:\n')
//     res.end(JSON.stringify(req.body, null, 2))
//   })
app.use("/api/users", userRoute)
// app.use("/api/products", userRoute)
app.use("/api/chats", chatRoute)
app.use("/api/messages", messageRoute)
app.use("/api/data", dataRoute)
app.use("/api/profile", profileRoute)
app.use("/api/home", homeRoute)
app.use("/api/stats", statsRoute)
app.use("/assets", express.static("assets"))
app.use("/test", express.static("test"))
// app.use("/save-gal-images", urlencodedParser,(req, res) => {
//     res.status(200).json(req.body.fileNameArray)
// })
app.use(express.static('test'))

//store profile image
const storage = multer.diskStorage({
    destination: (res, file, cb)=> {
        cb(null, "assets/images/profile_images")
    },
    filename: (req, file, cb)=> {
        console.log(file)
        cb(null, Date.now()+path.extname(file.originalname))
    }
})
const upload = multer({storage: storage})
const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>console.log("MongoDB connected!")).catch((error)=>console.log("MongoDB failed", error.message));

app.listen(port, (req, res) => {
    console.log(`Server running on port: ${port}`);
})