const nodemailer = require('nodemailer')
require('dotenv').config()
var path = require("path");
const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.USER,
      pass: process.env.APP_PASSWORD,
    },
  });
  // const transporter = nodemailer.createTransport({
  //   host: "sandbox.smtp.mailtrap.io",
  //   port: 2525,
  //   secure: false, // Use `true` for port 465, `false` for all other ports
  //   auth: {
  //     user: "2ccf4c3de07bd9",
  //     pass: "cc236c8c1c37c4",
  //   },
  // });
// const mailOptions = {
//     from: {
//         name: 'Amo Dating',
//         address: process.env.USER,
//     },
//     to: "trungkien88662020@gmail.com, trungkien2411@gmail.com", // list of receivers
//     subject: "Đăng ký tài khoản thành công", // Subject line
//     priority: 'high',
//     text: "Bạn đã đăng ký tài khoản thành công.", // plain text body
//     html: "<b>Hello world?</b>", // html body
//     attachments: [
//         {
//         filename: 'CHAT APP.pdf',
//         path: '../server/assets/pdf/CHAT APP.pdf',
//         contentType: 'application/pdf'
//         },
//         {
//         filename: 'le - thuy - linh-1707074352665.jpg',
//         path: '../server/assets/images/profile_images/le - thuy - linh-1707074352665.jpg',
//         contentType: 'image/jpg'
//         }
// ]
// }
const mailOptions = {
    from: {
        name: 'Amo Dating',
        address: process.env.USER,
    },
    to: "trungkien88662020@gmail.com", // list of receivers
    subject: "Đăng ký tài khoản thành công", // Subject line
    priority: 'high',
    text: "Bạn đã đăng ký tài khoản thành công.", // plain text body
    html: "<b>Hello world?</b>", // html body
    attachments: [
        {
        filename: 'CHAT APP.pdf',
        path: '../server/assets/pdf/CHAT APP.pdf',
        contentType: 'application/pdf'
        },
        {
        filename: 'le - thuy - linh-1707074352665.jpg',
        path: '../server/assets/images/profile_images/le - thuy - linh-1707074352665.jpg',
        contentType: 'image/jpg'
        }
]
}
const sendMail = async(mailOptions)=>{
    try {
        await transporter.sendMail(mailOptions)
        return "success"
    }catch(error){
        console.log(error)
    }
}
module.exports = {sendMail}