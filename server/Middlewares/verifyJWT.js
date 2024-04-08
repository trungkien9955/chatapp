const jwt = require("jsonwebtoken");
require('dotenv').config()
const verifyJWT = (req, res, next) => {
    const authHeader = req.headers['authorization']
    if(!authHeader) return res.sendStatus(401)
    const token = authHeader.split(' ')[1]
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (error, decoded) => {
            console.log("starts verify jwt")
            if(error) return res.status(403).json({errMsg: "Bạn chưa được cấp quyền thực hiện thao tác này."})
            console.log("ends verify jwt")
            next()
        }
    )
}
module.exports = verifyJWT