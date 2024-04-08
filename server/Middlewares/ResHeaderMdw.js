const resHeaderMdw = (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://192.168.1.218:5173')
    console.log(res)
    next()
}
module.exports = resHeaderMdw