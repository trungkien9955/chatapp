const allowOrigins = require("./allowedOrigins");


const credentials = (req, res, next)=> {
    const origin = req.headers.origin;
    if(allowOrigins.includes(origin)){
        res.header('Access-Control-Allow-Credentials', true)
        res.header("Access-Control-Allow-Origin", 'http://192.168.1.218:5173')

    }
    next()
}
module.exports = credentials