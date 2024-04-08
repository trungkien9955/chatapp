const City = require("../Models/cityModel");
const Hobby = require("../Models/hobbyModel");
const userModel = require("../Models/userModel");
const Message = require("../Models/messageModel");
const Gender = require("../Models/genderModel");
const DatingGoal = require("../Models/datingGoalModel");
const KidOption = require("../Models/kidOptionModel");
const SmokingOption = require("../Models/smokingOptionModel");
const DrinkingOption = require("../Models/drinkingOptionModel");
const Job = require("../Models/jobModel");
const Edu = require("../Models/eduModel");
const College = require("../Models/collegeModel");
const Chat = require("../Models/chatModel");
const Noti = require("../Models/notiModel");

const getCities = async (req, res) => {
    try{
        const cities = await City.find()
        res.status(200).json(cities)
    }catch(error){
        console.log(error)
        res.status(500).json(error)
    }
}
const addCityId = async (req, res) => {
    try{
         await  City.updateMany({}, {$rename: {"_id": "alt_id"}})
        res.status(200).json('Thêm dữ liệu thành công')
    }catch(error){
        console.log(error)
        res.status(500).json(error)
    }
}
const addHobbyField = async (req, res) => {
    try{
         await  userModel.updateOne({name: "ss177"}, {$set: {hobbyIds: ["65a8ba9554f2d786cac4b032", "65a8ba9554f2d786cac4b031"]}})
        res.status(200).json('Update hobby field thành công')
    }catch(error){
        console.log(error)
        res.status(500).json(error)
    }
}
const findUser = async (req, res) => {
    // try{
        // const city = await userModel.findOne({name: "ss177"}).populate('cityId').exec()
        // res.status(200).json(city.cityId.name)
    //     const user = await userModel.findOne({name: "ss177"}).populate('hobbyIds').exec()
    //     let message = ""
    //     user.hobbyIds.forEach((hobby)=>{
    //         message = message + " "+ hobby.name
    //     })
    //     res.status(200).json(message)
    // }catch(error){
    //     console.log(error)
    //     res.status(500).json(error)
    // }
//     try{
//         await  userModel.updateMany({}, {$set: {"profile_img": ""}})
//        res.status(200).json('Cập nhật dữ liệu thành công')
//    }catch(error){
//        console.log(error)
//        res.status(500).json(error)
//    }
//    try{
//     await  userModel.updateMany({}, {$set: {"galImages": []}})
//    res.status(200).json('Cập nhật dữ liệu thành công')
// }catch(error){
//    console.log(error)
//    res.status(500).json(error)
// }
// try{
//     await  userModel.updateMany({}, {$rename: {"gal_images": "galImages", "profile_img": "profileImage"}})
//    res.status(200).json('Cập nhật dữ liệu thành công')
// }catch(error){
//    console.log(error)
//    res.status(500).json(error)
// }
// try{
//     await  userModel.updateMany({}, {$unset: {"gal_images": ""}})
//    res.status(200).json('Cập nhật dữ liệu thành công')
// }catch(error){
//    console.log(error)
//    res.status(500).json(error)
// }
// try{
//     await  userModel.updateMany({}, {$unset: {"gal_images": ""}})
//    res.status(200).json('Cập nhật dữ liệu thành công')
// }catch(error){
//    console.log(error)
//    res.status(500).json(error)
// }
// try{
//     await userModel.updateOne({_id: "659faa8d0ce96138b81b94a8"}, {$set: {"galImages": []}})
//     res.status(200).json("Đã update")
// }catch(error){
//     console.log(error)
//     res.status(500).json(error)
// }
// try{
//     await userModel.updateOne({_id: "65ab4aa46cfa70ec00c4ad53"}, {$set: {cityId: "65a8ac874efc673284b31212"}})
//     res.status(200).json("Đã update")
// }catch(error){
//     console.log(error)
//     res.status(500).json(error)
// }
// try{
//     await  userModel.updateMany({}, {$set: {cityId: null}})
//    res.status(200).json('Cập nhật dữ liệu thành công')
// }catch(error){
//    console.log(error)
//    res.status(500).json(error)
// }
//    try{
//     await  userModel.updateMany({}, {$set: {likedUsers: []}} )
//    res.status(200).json('Cập nhật dữ liệu thành công')
// }catch(error){
//    console.log(error)
//    res.status(500).json(error)
// }
// try{
//     await  userModel.updateMany({}, {$set: {fans: []}} )
//    res.status(200).json('Cập nhật dữ liệu thành công')
// }catch(error){
//    console.log(error)
//    res.status(500).json(error)
// }
// try{
//     await  userModel.updateMany({}, {$rename: {"likedUsers": "likedStrangers"}})
//    res.status(200).json('Cập nhật dữ liệu thành công')
// }catch(error){
//    console.log(error)
//    res.status(500).json(error)
// }
// try{
//     await  userModel.updateMany({}, {$set: {noti: []}} )
//    res.status(200).json('Cập nhật dữ liệu thành công')
// }catch(error){
//    console.log(error)
//    res.status(500).json(error)
// }
//set array to empty
// try{
//     await  userModel.updateMany({}, {$set: {fans: [], likedStrangers: [], noti: [],datingGoals: []}} )
//    res.status(200).json('Cập nhật dữ liệu thành công')
// }catch(error){
//    console.log(error)
//    res.status(500).json(error)
// }
// try{
//     await  userModel.updateMany({}, {$set: {chats: []}} )
//    res.status(200).json('Cập nhật dữ liệu thành công')
// }catch(error){
//    console.log(error)
//    res.status(500).json(error)
// }
// try{
//     await  Message.updateMany({}, {$set: {recipientId: ""}} )
//    res.status(200).json('Cập nhật dữ liệu thành công')
// }catch(error){
//    console.log(error)
//    res.status(500).json(error)
// }
// try{
//     await  userModel.updateMany({}, {$set: {messageNoti: []}} )
//    res.status(200).json('Cập nhật dữ liệu thành công')
// }catch(error){
//    console.log(error)
//    res.status(500).json(error)
// }
// try{
//     await  Message.deleteMany({})
//    res.status(200).json('Cập nhật dữ liệu thành công')
// }catch(error){
//    console.log(error)
//    res.status(500).json(error)
// }
// try{
//     await  Gender.insertMany([
//         {name: "Nữ"},
//         {name: "Nam"},
//         {name: "Đồng tính nữ (Lesbian)"},
//         {name: "Đồng tính nam (Gay)"},
//         {name: "Song tính (Bisexual)"},
//         {name: "Chuyển giới (Transgener)"},
//         {name: "Chưa rõ"},
//     ])
//    res.status(200).json('Cập nhật dữ liệu thành công')
// }catch(error){
//    console.log(error)
//    res.status(500).json(error)
// }
// try{
//     await Gender.updateOne({name: "Chuyển giới (Transgener)"}, {$set: {name: "Chuyển giới (Transgender)"}})
//     res.status(200).json("Đã update")
// }catch(error){
//     console.log(error)
//     res.status(500).json(error)
// }
//    try{
//     await  userModel.updateMany({}, {$set: {gender: null}})
//    res.status(200).json('Cập nhật dữ liệu thành công')
// }catch(error){
//    console.log(error)
//    res.status(500).json(error)
// }
// try{
//         await  DatingGoal.insertMany([
//             {name: "Trò chuyện"},
//             {name: "Không ràng buộc"},
//             {name: "Tìm mối quan hệ lâu dài"},
//         ])
//        res.status(200).json('Cập nhật dữ liệu thành công')
//     }catch(error){
//        console.log(error)
//        res.status(500).json(error)
//     }
//set array to empty
// try{
//     await  userModel.updateMany({}, {$set: {datingGoals: []}} )
//    res.status(200).json('Cập nhật dữ liệu thành công')
// }catch(error){
//    console.log(error)
//    res.status(500).json(error)
// }
// try{
//     await  Hobby.updateMany({}, {$unset: {"alt_id": ""}})
//    res.status(200).json('Cập nhật dữ liệu thành công')
// }catch(error){
//    console.log(error)
//    res.status(500).json(error)
// }
// try{
//     await  userModel.updateMany({}, {$set: {"hobbies": []}})
//    res.status(200).json('Cập nhật dữ liệu thành công')
// }catch(error){
//    console.log(error)
//    res.status(500).json(error)
// }
//bóng đá đi bộ nhiếp ảnh dancing shopping
// try{
//         await  Hobby.insertMany([
//             // {name: "Diễn xuất", type: "Art"},
//             // {name: "Hand-made", type: "Art"},
//             // {name: "Hội họa", type: "Art"},
//             // {name: "Guitar", type: "Music"},
//             // {name: "Điêu khắc", type: "Art"},
//             // {name: "Viết lách", type: "Art"},
//             // {name: "Làm vườn", type: "Outdoor"},
//             // {name: "Trang trí", type: "Outdoor"},
//             // {name: "Chim cảnh", type: "Pet"},
//             // {name: "Mèo", type: "Pet"},
//             // {name: "Chó", type: "Pet"},
//             // {name: "Cá cảnh", type: "Pet"},
//             // {name: "Thỏ", type: "Pet"},
//             // {name: "Bò sát", type: "Pet"},
//             // {name: "Từ thiện", type: "Social"},
//             // {name: "Cộng đồng", type: "Social"},
//             // {name: "Môi trường", type: "Social"},
//             // {name: "Luật", type: "Social"},
//             // {name: "Quân sự", type: "Social"},
//             // {name: "Chính trị", type: "Social"},
//             // {name: "Tôn giáo", type: "Social"},
//             // {name: "Du lịch", type: "Travel"},
//             // {name: "Làm đẹp", type: "Personal"},
//             // {name: "Mỹ phẩm", type: "Personal"},
//             // {name: "Nước hoa", type: "Personal"},
//             // {name: "Túi xách", type: "Shopping"},
//             // {name: "Đá quý", type: "Shopping"},
//             // {name: "Đồng hồ", type: "Shopping"},
//             // {name: "Trang sức", type: "Shopping"},
//             // {name: "Cắm trại", type: "Outdoor"},
//             // {name: "Câu cá", type: "Outdoor"},
//             // {name: "Đạp xe", type: "Outdoor"},
//             // {name: "Bóng rổ", type: "Sport"},
//             // {name: "Bóng chuyền", type: "Sport"},
//             // {name: "Golf", type: "Sport"},
//             // {name: "Trượt tuyết", type: "Sport"},
//             // {name: "Bơi lội", type: "Sport"},
//             // {name: "Tennis", type: "Sport"},
//             // {name: "Bóng bàn", type: "Sport"},
//             // {name: "Máy tính", type: "Tech"},
//             // {name: "Phần mềm", type: "Tech"},
//             // {name: "Internet", type: "Tech"},
//             // {name: "Thiết bị âm thanh", type: "Tech"},
//             // {name: "Máy ảnh", type: "Tech"},
//             // {name: "Điện thoại thông minh", type: "Tech"},
//             // {name: "Công viên", type: "Outdoor"},
//             // {name: "Thiên nhiên", type: "Outdoor"},
//             // {name: "Nhà hàng", type: "Food"},
//             // {name: "Đồ nướng", type: "Food"},
//             // {name: "Sô cô la", type: "Food"},
//             // {name: "Đồ ăn nhanh", type: "Food"},
//             // {name: "Thực phẩm hữu cơ", type: "Food"},
//             // {name: "Pizza", type: "Food"},
//             // {name: "Hải sản", type: "Food"},
//             // {name: "Ăn chay", type: "Food"},
//             // {name: "Pizza", type: "Food"},
//             // {name: "Ẩm thực", type: "Food"},
//             // {name: "Ẩm thực Trung Quốc", type: "Food"},
//             // {name: "Ẩm thực Pháp", type: "Food"},
//             // {name: "Ẩm thực Đức", type: "Food"},
//             // {name: "Ẩm thực Nhật", type: "Food"},
//             // {name: "Ẩm thực Hàn", type: "Food"},
//             // {name: "Ẩm thực Thái Lan", type: "Food"},
//             // {name: "Ẩm thực Tây Ban Nha", type: "Food"},
//             // {name: "Bánh ngọt", type: "Food"},
//             // {name: "Trà", type: "Drink"},
//             // {name: "Nước ép hoa quả", type: "Drink"},
//             // {name: "Nước ngọt", type: "Drink"},
//             // {name: "Cà phê", type: "Drink"},
//             // {name: "Rượu", type: "Drink"},
//             // {name: "Thể hình", type: "Fitness"},
//             // {name: "Thiền", type: "Fitness"},
//             // {name: "Thể dục", type: "Fitness"},
//             // {name: "Tập luyện", type: "Fitness"},
//             // {name: "Chạy bộ", type: "Outdoor"},
//             // {name: "Yoga", type: "Fitness"},
//             // {name: "Đọc sách", type: "Indoor"},
//             // {name: "Truyện tranh", type: "Indoor"},
//             // {name: "Tiểu thuyết", type: "Indoor"},
//             // {name: "Tạp chí", type: "Indoor"},
//             // {name: "Manga", type: "Indoor"},
//             // {name: "Báo chí", type: "Indoor"},
//             // {name: "Nhạc cổ điển", type: "Music"},
//             // {name: "Nhạc đồng quê", type: "Music"},
//             // {name: "Nhạc Dance", type: "Music"},
//             // {name: "Nhạc điện tử", type: "Music"},
//             // {name: "Hip hop", type: "Music"},
//             // {name: "Nhạc Pop", type: "Music"},
//             // {name: "Rock", type: "Music"},
//             // {name: "Nhạc epic", type: "Music"},
//             // {name: "Phim hành động", type: "Film"},
//             // {name: "Phim anime", type: "Film"},
//             // {name: "Bollywood", type: "Film"},
//             // {name: "Phim tài liệu", type: "Film"},
//             // {name: "Phim kinh dị", type: "Film"},
//             // {name: "Phim khoa học viễn tưởng", type: "Film"},
//             // {name: "Tiệc tùng", type: "Social"},
//             // {name: "Buỗi lễ âm nhạc", type: "Social"},
//             // {name: "Hòa nhạc", type: "Social"},
//             // {name: "Bar", type: "Social"},
//             // {name: "Rạp chiếu phim", type: "Social"},
//             // {name: "Game hành động", type: "Game"},
//             // {name: "Đánh bài", type: "Game"},
//             // {name: "Casino", type: "Game"},
//             // {name: "Game FPS", type: "Game"},
//             // {name: "Game online", type: "Game"},
//             // {name: "Game đua xe", type: "Game"},
//             // {name: "Game bắn súng", type: "Game"},
//             // {name: "Game thể thao", type: "Game"},
//             // {name: "Game chiến lược", type: "Game"},
//             // {name: "Game đồ họa", type: "Game"},
//             // {name: "Nông nghiệp", type: "Business"},
//             // {name: "Kiến trúc", type: "Business"},
//             // {name: "Hàng không", type: "Business"},
//             // {name: "Ngân hàng", type: "Business"},
//             // {name: "Đầu tư", type: "Business"},
//             // {name: "Chứng khoán", type: "Business"},
//             // {name: "Xây dựng", type: "Business"},
//             // {name: "Thiết kế", type: "Business"},
//             // {name: "Kinh tế", type: "Business"},
//             // {name: "Chăm sóc sức khỏe", type: "Business"},
//             // {name: "Quản lý", type: "Business"},
//             // {name: "Tiếp thị", type: "Business"},
//             // {name: "Mạng xã hội", type: "Social"},
//             // {name: "Thiết kế website", type: "Business"},
//             // {name: "Phát triển website", type: "Business"},
//             // {name: "Bảo hiểm", type: "Business"},
//             // {name: "Bất động sản", type: "Business"},
//             // {name: "Bán hàng", type: "Business"},
//             // {name: "Kinh doanh", type: "Business"},
//             // {name: "Kinh doanh nhỏ", type: "Business"},
//             {name: "Bóng đá", type: "Sport"},
//             {name: "Đi bộ", type: "Sport"},
//             {name: "Dance", type: "Sport"},
//             {name: "Nhiếp ảnh", type: "Art"},
//             {name: "Shopping", type: "Shopping"},
//         ])
//        res.status(200).json('Cập nhật dữ liệu thành công')
//     }catch(error){
//        console.log(error)
//        res.status(500).json(error)
//     }
    // try{
    //     await  KidOption.insertMany([
    //         {name: "Chưa có con"},
    //         {name: "Đã có con"},
    //     ])
    //    res.status(200).json('Cập nhật dữ liệu thành công')
    // }catch(error){
    //    console.log(error)
    //    res.status(500).json(error)
    // }
//        try{
//     await  userModel.updateMany({}, {$set: {kidOption: null}})
//    res.status(200).json('Cập nhật dữ liệu thành công')
// }catch(error){
//    console.log(error)
//    res.status(500).json(error)
// }
    // try{
    //     await  SmokingOption.insertMany([
    //         {name: "Không bao giờ"},
    //         {name: "Thỉnh thoảng"},
    //         {name: "Thường xuyên"},
    //     ])
    //    res.status(200).json('Cập nhật dữ liệu thành công')
    // }catch(error){
    //    console.log(error)
    //    res.status(500).json(error)
    // }
//            try{
//     await  userModel.updateMany({}, {$set: {smokingOption: null}})
//    res.status(200).json('Cập nhật dữ liệu thành công')
// }catch(error){
//    console.log(error)
//    res.status(500).json(error)
// }
//    try{
//         await  DrinkingOption.insertMany([
//             {name: "Không bao giờ"},
//             {name: "Thỉnh thoảng"},
//             {name: "Thường xuyên"},
//         ])
//        res.status(200).json('Cập nhật dữ liệu thành công')
//     }catch(error){
//        console.log(error)
//        res.status(500).json(error)
//     }
//            try{
//     await  userModel.updateMany({}, {$set: {drinkingOption: null}})
//    res.status(200).json('Cập nhật dữ liệu thành công')
// }catch(error){
//    console.log(error)
//    res.status(500).json(error)
// }
//    try{
//         await  Job.insertMany([
//             {name: "Hành chính, Thư ký"},
//             {name: "Khách sạn, Nhà hàng, Du lịch"},
//             {name: "Bản sỉ, Bán lẻ, Quản lý cửa hàng"},
//             {name: "Marketing"},
//             {name: "Bán hàng, Kinh doanh"},
//             {name: "Kế toán"},
//             {name: "Tài chính, Đầu tư, Chứng khoán"},
//             {name: "Khoa học, Kỹ thuật"},
//             {name: "An ninh, Bảo vệ"},
//             {name: "Thiết kế - Sáng tạo nghệ thuật"},
//             {name: "IT Phần cứng, Mạng"},
//             {name: "IT Phần mềm"},
//             {name: "Sản xuất, Lắp ráp, Chế biến"},
//             {name: "Vận hành, Bảo trì, Bảo dưỡng"},
//             {name: "Nông, Lâm, Ngư nghiệp"},
//             {name: "Thu mua, Kho vận, Chuỗi cung ứng"},
//             {name: "Vận tải, Lái xe, Giao nhận"},
//             {name: "Ngân hàng"},
//             {name: "Khoáng sản, Địa chất"},
//             {name: "Y tế, Chăm sóc sức khỏe"},
//             {name: "Nhân sự"},
//             {name: "Bảo hiểm"},
//             {name: "Thông tin, Truyền thông, Quảng cáo"},
//             {name: "Luật, Pháp lý, Tuân thủ"},
//             {name: "Quản lý dự án"},
//             {name: "Bất động sản"},
//             {name: "Chăm sóc khách hàng"},
//             {name: "Xây dựng"},
//             {name: "Giáo dục, Đào tạo"},
//             {name: "An toàn lao động"},
//             {name: "Biên phiên dịch"},
//             {name: "Bưu chính viễn thông"},
//             {name: "Dệt may, Da giày, Thời trang"},
//             {name: "Điện, Điện tử, Điện lạnh"},
//             {name: "Dầu khí"},
//             {name: "Dược phẩm"},
//             {name: "Môi trường, Xử lý chất thải"},
//             {name: "Hóa học, Hóa sinh"},
//             {name: "Thực phẩm, Đồ uống"},
//             {name: "Chăn nuôi, Thú y"},
//             {name: "Cơ khí, Ô tô, Tự động hóa"},
//             {name: "Lao động phổ thông"},
//             {name: "Phi chính phủ, Phi lợi nhuận"},
//             {name: "Truyền hình, Báo chí, Biên tập"},
//             {name: "Xuất bản, in ấn"},
//             {name: "Kiểm toán"},
//             {name: "Hành chính, công chứng"},
//             {name: "Lập trình web"},
//             {name: "Lập trình di động"},
//         ])
//        res.status(200).json('Cập nhật dữ liệu thành công')
//     }catch(error){
//        console.log(error)
//        res.status(500).json(error)
//     }
// try{
//     await  userModel.updateMany({}, {$rename: {"cityId": "datingCity"}})
//    res.status(200).json('Cập nhật dữ liệu thành công')
// }catch(error){
//    console.log(error)
//    res.status(500).json(error)
// }
// try{
//     await  userModel.updateMany({}, {$set: {"jobs": []}})
//    res.status(200).json('Cập nhật dữ liệu thành công')
// }catch(error){
//    console.log(error)
//    res.status(500).json(error)
// }
//    try{
//         await  Edu.insertMany([
//             {name: "Trung học cơ sở"},
//             {name: "Trung học phổ thông"},
//             {name: "Trung cấp nghề"},
//             {name: "Cao đẳng"},
//             {name: "Đại học"},
//             {name: "Cao học"},
//         ])
//        res.status(200).json('Cập nhật dữ liệu thành công')
//     }catch(error){
//        console.log(error)
//        res.status(500).json(error)
//     }
//            try{
//     await  userModel.updateMany({}, {$set: {eduOption: null}})
//    res.status(200).json('Cập nhật dữ liệu thành công')
// }catch(error){
//    console.log(error)
//    res.status(500).json(error)
// }
//    try{
//         await  College.insertMany([
//             {name: "Học Viện An Ninh Nhân Dân"},
//             {name: "Đại Học An Ninh Nhân Dân"},
//             {name: "Đại Học Bách Khoa Hà Nội"},
//             {name: "Đại học Y Dược Buôn Ma Thuột"},
//             {name: "Học Viện Biên Phòng"},
//             {name: "Đại Học Anh Quốc Việt Nam"},
//             {name: "Học Viện Công Nghệ Bưu Chính Viễn Thông (Phía Bắc)"},
//             {name: "Học Viện Công Nghệ Bưu Chính Viễn Thông (Phía Nam)"},
//             {name: "Đại Học Bà Rịa – Vũng Tàu"},
//             {name: "Đại Học Công Nghiệp Dệt May Hà Nội"},
//             {name: "Đại học Kinh Tế Nghệ An"},
//             {name: "Đại Học CMC"},
//             {name: "Học Viện Cảnh Sát Nhân Dân"},
//             {name: "Đại Học Cảnh Sát Nhân Dân"},
//             {name: "Đại Học Đông Á"},
//             {name: "Đại Học Bình Dương"},
//             {name: "Đại học Nông Lâm Bắc Giang"},
//             {name: "Đại Học Quốc Tế Bắc Hà"},
//             {name: "Đại Học Bạc Liêu"},
//             {name: "Đại Học Chu Văn An"},
//             {name: "Đại Học Công Nghệ Đồng Nai"},
//             {name: "Trường Sĩ Quan Đặc Công"},
//             {name: "Đại Học Cửu Long"},
//             {name: "Đại Học Công Nghiệp Hà Nội"},
//             {name: "Đại Học Công Nghệ và Quản Lý Hữu Nghị"},
//             {name: "Đại Học Công Thương TPHCM"},
//             {name: "Đại học Công nghiệp Vinh"},
//             {name: "Đại Học Công Nghệ Đông Á"},
//             {name: "Đại Học Thành Đông"},
//             {name: "Đại Học Ngoại Ngữ – Đại Học Đà Nẵng"},
//             {name: "Khoa Giáo dục thể chất - Đại học Đà Nẵng"},
//             {name: "Đại Học Bách Khoa – Đại Học Đà Nẵng"},
//             {name: "Đại Học Điện Lực"},
//             {name: "Đại Học Công Nghiệp Quảng Ninh"},
//             {name: "Đại Học Đại Nam"},
//             {name: "Phân Hiệu Đại Học Đà Nẵng tại Kon Tum"},
//             {name: "Đại Học Kinh Tế – Đại Học Đà Nẵng"},
//             {name: "Đại Học Sư Phạm – Đại Học Đà Nẵng"},
//             {name: "Đại Học Duy Tân"},
//             {name: "Đại Học Đông Đô"},
//             {name: "Viện nghiên cứu và đào tạo Việt Anh - Đại học Đà Nẵng"},
//             {name: "Khoa Y Dược – Đại Học Đà Nẵng"},
//             {name: "Đại học Tài chính Quản trị kinh doanh"},
//             {name: "Đại học Luật - Đại Học Huế"},
//             {name: "Khoa Giáo Dục Thể Chất – Đại Học Huế"},
//             {name: "Trường Du Lịch – Đại Học Huế"},
//             {name: "Khoa Kỹ thuật và Công nghệ - Đại học Huế"},
//             {name: "Đại Học Ngoại Ngữ – Đại Học Huế"},
//             {name: "Đại Học Hà Hoa Tiên"},
//             {name: "Khoa Quốc tế - Đại học Huế"},
//             {name: "Đại Học Kinh Tế – Đại Học Huế"},
//             {name: "Đại Học Nông Lâm – Đại Học Huế"},
//             {name: "Đại Học Nghệ Thuật – Đại Học Huế"},
//             {name: "Đại học Quản lý và Công nghệ Hải Phòng"},
//             {name: "Phân Hiệu Đại Học Huế tại Quảng Trị"},
//             {name: "Đại Học Sư Phạm – Đại Học Huế"},
//             {name: "Đại Học Khoa Học – Đại Học Huế"},
//             {name: "Đại học Hùng Vương TPHCM"},
//             {name: "Đại Học Y Dược – Đại Học Huế"},
//             {name: "Đại Học Kinh Tế Kỹ Thuật Bình Dương"},
//             {name: "Đại học Công Nghệ TPHCM"},
//             {name: "Đại Học Dược Hà Nội"},
//             {name: "Đại Học Kinh Tế Kỹ Thuật Công Nghiệp"},
//             {name: "Đại học Kiểm Sát Hà Nội"},
//             {name: "Đại Học Hải Dương"},
//             {name: "Đại Học Kỹ Thuật Y Tế Hải Dương"},
//             {name: "Đại Học Kinh Tế Công Nghiệp Long An"},
//             {name: "Đại Học Lạc Hồng"},
//             {name: "Đại Học Lao Động – Xã Hội (Cơ sở phía Nam)"},
//             {name: "Đại Học Lao Động – Xã Hội (Cơ sở Sơn Tây)"},
//             {name: "Đại Học Lao Động – Xã Hội (Cơ sở Hà Nội)"},
//             {name: "Đại Học Tài Chính Marketing"},
//             {name: "Đại học Tài Nguyên và Môi Trường Hà Nội"},
//             {name: "Đại Học Hoa Lư"},
//             {name: "Đại học Nam Cần Thơ"},
//             {name: "Học Viện Khoa Học Quân Sự - Hệ Dân sự"},
//             {name: "Đại Học Ngoại Ngữ Tin Học TPHCM"},
//             {name: "Đại Học Đồng Nai"},
//             {name: "Đại học Nội vụ Hà Nội"},
//             {name: "Đại Học Phan Châu Trinh"},
//             {name: "Đại Học Phương Đông"},
//             {name: "Đại Học Phạm Văn Đồng"},
//             {name: "Đại Học Phan Thiết"},
//             {name: "Đại Học Phú Xuân"},
//             {name: "Đại Học Phú Yên"},
//             {name: "Đại Học Quảng Bình"},
//             {name: "Học Viện Kỹ Thuật Quân Sự - Hệ Dân sự"},
//             {name: "Đại Học Kinh Doanh và Công Nghệ Hà Nội"},
//             {name: "Đại Học Quy Nhơn"},
//             {name: "Đại Học Quang Trung"},
//             {name: "Đại Học Quảng Nam"},
//             {name: "Đại Học Sân Khấu Điện Ảnh TPHCM"},
//             {name: "Đại Học Công Nghệ Sài Gòn"},
//             {name: "Đại học Sư phạm Kỹ thuật - Đại học Đà Nẵng"},
//             {name: "Đại Học Thái Bình"},
//             {name: "Đại học Công Nghệ Thông Tin và Truyền Thông – Đại Học Thái Nguyên"},
//             {name: "Đại Học Tây Đô"},
//             {name: "Đại học Kinh tế Quản trị kinh doanh - Đại học Thái Nguyên"},
//             {name: "Trường Ngoại Ngữ – Đại Học Thái Nguyên"},
//             {name: "Đại Học Kỹ Thuật Công Nghiệp – Đại Học Thái Nguyên"},
//             {name: "Đại Học Thăng Long"},
//             {name: "Đại học Tài Nguyên và Môi Trường TPHCM"},
//             {name: "Đại Học Nông Lâm – Đại Học Thái Nguyên"},
//             {name: "Phân Hiệu Đại Học Thái Nguyên Tại Lào Cai"},
//             {name: "Khoa Quốc Tế - Đại Học Thái Nguyên"},
//             {name: "Đại Học Sư Phạm - Đại Học Thái Nguyên"},
//             {name: "Đại Học Tôn Đức Thắng"},
//             {name: "Đại Học Lương Thế Vinh"},
//             {name: "Đại Học Y Dược – Đại Học Thái Nguyên"},
//             {name: "Đại Học Khoa Học – Đại Học Thái Nguyên"},
//             {name: "Đại Học Kinh tế công nghệ Thái Nguyên"},
//             {name: "Đại Học Văn Hóa, Thể Thao Và Du Lịch Thanh Hóa"},
//             {name: "Đại Học Văn Hiến"},
//             {name: "Đại Học Văn Lang"},
//             {name: "Đại Học Trưng Vương"},
//             {name: "Đại Học Trà Vinh"},
//             {name: "Đại Học Công Nghệ Vạn Xuân"},
//             {name: "Đại Học Yersin Đà Lạt"},
//             {name: "Học Viện Quân Y - Hệ Dân sự"},
//             {name: "Đại Học Quốc Tế Miền Đông"},
//             {name: "Đại Học Hòa Bình"},
//             {name: "Đại Học Tài Chính Ngân Hàng Hà Nội"},
//             {name: "Đại Học FPT"},
//             {name: "Đại Học Gia Định"},
//             {name: "Đại Học Giao Thông Vận Tải (Cơ sở Phía Bắc)"},
//             {name: "Đại Học Sư Phạm Nghệ Thuật Trung Ương"},
//             {name: "Đại Học Giao Thông Vận Tải (Cơ sở Phía Nam)"},
//             {name: "Đại học Công nghệ Giao thông vận tải"},
//             {name: "Đại Học Giao Thông Vận Tải TPHCM"},
//             {name: "Học viện Báo chí và Tuyên truyền"},
//             {name: "Học Viện Chính Trị Công An Nhân Dân"},
//             {name: "Đại Học Kỹ Thuật - Hậu Cần Công An Nhân Dân (Phía Bắc)"},
//             {name: "Học Viện Hành Chính Quốc Gia"},
//             {name: "Đại Học Kỹ Thuật - Hậu Cần Công An Nhân Dân (Phía Nam)"},
//             {name: "Học Viện Chính Sách và Phát Triển"},
//             {name: "Học Viện Hành Chính Quốc Gia (phía Nam)"},
//             {name: "Đại Học Hồng Đức"},
//             {name: "Học Viện Hậu Cần - Hệ Quân sự"},
//             {name: "Học Viện Hậu Cần - Hệ Dân s"},
//             {name: "Trường Sĩ Quan Phòng Hóa"},
//             {name: "Đại Học Hàng Hải Việt Nam"},
//             {name: "Học Viện Hàng không Việt Nam"},
//             {name: "Đại Học Hà Tĩnh"},
//             {name: "Đại Học Quốc Tế Hồng Bàng"},
//             {name: "Đại Học Hạ Long"},
//             {name: "Đại học Thủ Đô Hà Nội"},
//             {name: "Học Viện Phụ Nữ Việt Nam"},
//             {name: "Học Viện Hải Quân"},
//             {name: "Học Viện Ngoại Giao"},
//             {name: "Đại Học Hoa Sen"},
//             {name: "Học viện Tòa án"},
//             {name: "Học Viện Tài Chính"},
//             {name: "Học Viện Thanh Thiếu Niên Việt Nam"},
//             {name: "Học Viện Âm Nhạc Huế"},
//             {name: "Học viện cán bộ TPHCM"},
//             {name: "Học Viện Nông Nghiệp Việt Nam"},
//             {name: "Học Viện Quản Lý Giáo Dục"},
//             {name: "Học Viện Y Dược Học Cổ Truyền Việt Nam"},
//             {name: "Đại Học Công Nghiệp TPHCM"},
//             {name: "Đại học Kỹ Thuật Công Nghệ Cần Thơ"},
//             {name: "Đại Học Khoa Học Và Công Nghệ Hà Nội"},
//             {name: "Trường Sĩ Quan Không Quân - Hệ Cao đẳng"},
//             {name: "Trường Sĩ Quan Không Quân - Hệ Đại học"},
//             {name: "Đại Học Kinh Tế Quốc Dân"},
//             {name: "Học Viện Kỹ Thuật Mật Mã"},
//             {name: "Học Viện Kỹ Thuật Quân Sự - Hệ Quân sự"},
//             {name: "Đại Học Kinh Tế TPHCM"},
//             {name: "Đại học Kinh Tế TPHCM - Phân hiệu Vĩnh Long"},
//             {name: "Đại Học Kiến Trúc Hà Nội"},
//             {name: "Đại Học Kiến Trúc Đà Nẵng"},
//             {name: "Đại Học Kiến Trúc TPHCM"},
//             {name: "Trường Sĩ Quan Lục Quân 1 - Đại học Trần Quốc Tuấn"},
//             {name: "Trường Sĩ Quan Lục Quân 2 - Đại học Nguyễn Huệ"},
//             {name: "Đại học Nguyễn Huệ"},
//             {name: "Học viện Thiết kế và Thời trang London Hà Nội"},
//             {name: "Trường Sĩ Quan Chính Trị - Đại Học Chính Trị"},
//             {name: "Trường Sĩ quan Chính trị (hệ dân sự)"},
//             {name: "Đại Học Công Đoàn"},
//             {name: "Phân hiệu Đại học Lâm nghiệp tỉnh Gia Lai"},
//             {name: "Đại Học Lâm nghiệp"},
//             {name: "Phân hiệu Đại Học Lâm nghiệp tại Đồng Nai"},
//             {name: "Đại Học Luật Hà Nội"},
//             {name: "Đại Học Luật TPHCM"},
//             {name: "Đại Học Mở TPHCM"},
//             {name: "Đại Học Mỏ Địa Chất"},
//             {name: "Đại Học Mở Hà Nội"},
//             {name: "Đại học Công nghệ Miền Đông"},
//             {name: "Đại Học Mỹ Thuật Công Nghiệp"},
//             {name: "Đại Học Mỹ Thuật Việt Nam"},
//             {name: "Đại Học Mỹ Thuật TPHCM"},
//             {name: "Đại Học Xây Dựng Miền Tây"},
//             {name: "Học Viện Ngân Hàng (Phân Viện Bắc Ninh)"},
//             {name: "Đại Học Hà Nội"},
//             {name: "Học Viện Ngân Hàng"},
//             {name: "Học Viện Ngân Hàng (Phân Viện Phú Yên)"},
//             {name: "Đại Học Ngân Hàng TPHCM"},
//             {name: "Phân hiệu Đại học Nông Lâm TPHCM tại Gia Lai"},
//             {name: "Phân hiệu Đại học Nông Lâm TPHCM tại Ninh Thuận"},
//             {name: "Đại Học Nông Lâm TPHCM"},
//             {name: "Học Viện Khoa Học Quân Sự - Hệ Quân sự"},
//             {name: "Đại học Ngoại thương (Cơ sở phía Bắc)"},
//             {name: "Đại học Ngoại thương (Cơ sở phía Nam)"},
//             {name: "Đại Học Nguyễn Tất Thành"},
//             {name: "Đại Học Nguyễn Trãi"},
//             {name: "Học Viện Âm Nhạc Quốc Gia Việt Nam"},
//             {name: "Nhạc Viện TPHCM"},
//             {name: "Trường Sĩ Quan Pháo Binh"},
//             {name: "Đại Học Phòng Cháy Chữa Cháy (Phía Bắc)"},
//             {name: "Đại Học Phòng Cháy Chữa Cháy (Hệ Dân sự Phía Bắc)"},
//             {name: "Đại Học Phòng Cháy Chữa Cháy (phía Nam)"},
//             {name: "Đại Học Phòng Cháy Chữa Cháy (Hệ Dân sự Phía Nam)"},
//             {name: "Đại Học Phenikaa"},
//             {name: "Học Viện Phòng Không – Không Quân"},
//             {name: "Đại Học Dầu Khí Việt Nam"},
//             {name: "Trường Quản Trị và Kinh Doanh - ĐH Quốc gia Hà Nội"},
//             {name: "Đại Học Kinh Tế – Đại Học Quốc Gia Hà Nội"},
//             {name: "Đại Học Ngoại Ngữ – Đại Học Quốc Gia Hà Nội"},
//             {name: "Đại Học Công Nghệ – Đại Học Quốc Gia Hà Nội"},
//             {name: "Đại học Luật – Đại Học Quốc Gia Hà Nội"},
//             {name: "Trường Quốc Tế – Đại Học Quốc Gia Hà Nội"},
//             {name: "Đại Học Giáo Dục - Đại học Quốc Gia Hà Nội"},
//             {name: "Đại Học Khoa Học Tự Nhiên – Đại Học Quốc Gia Hà Nội"},
//             {name: "Đại Học Khoa Học Xã Hội và Nhân Văn – Đại Học Quốc Gia Hà Nội"},
//             {name: "Đại học Y Dược - Đại học Quốc Gia Hà Nội"},
//             {name: "Đại Học Bách Khoa – Đại Học Quốc Gia TPHCM"},
//             {name: "Đại Học Công Nghệ Thông Tin – Đại Học Quốc Gia TPHCM"},
//             {name: "Đại học Kinh Tế Luật – Đại Học Quốc Gia TPHCM"},
//             {name: "Đại Học Quốc Tế – Đại Học Quốc Gia TPHCM"},
//             {name: "Đại Học Khoa Học Tự Nhiên – Đại Học Quốc Gia TPHCM"},
//             {name: "Đại Học Khoa Học Xã Hội và Nhân Văn – Đại Học Quốc Gia TPHCM"},
//             {name: "Khoa Y - Đại học Quốc Gia TPHCM"},
//             {name: "Đại Học Răng – Hàm – Mặt"},
//             {name: "Đại Học Quốc Tế RMIT Việt Nam"},
//             {name: "Đại học Sao Đỏ"},
//             {name: "Đại Học Sài Gòn"},
//             {name: "Đại Học Quốc Tế Sài Gòn"},
//             {name: "Đại Học Sân Khấu Điện Ảnh Hà Nội"},
//             {name: "Đại Học Sư Phạm Kỹ Thuật Hưng Yên"},
//             {name: "Đại Học Sư Phạm Kỹ Thuật Nam Định"},
//             {name: "Đại Học Sư Phạm Kỹ Thuật Vinh"},
//             {name: "Trường Sĩ Quan Công Binh - Hệ Quân sự - Đại học Ngô Quyền"},
//             {name: "Đại Học Sư Phạm Hà Nội 2"},
//             {name: "Đại Học Đồng Tháp"},
//             {name: "Đại Học Sư Phạm Hà Nội"},
//             {name: "Đại Học Sư Phạm Kỹ Thuật TPHCM"},
//             {name: "Đại Học Sư Phạm TPHCM"},
//             {name: "Đại Học Sư Phạm Thể Dục Thể Thao TPHCM"},
//             {name: "Đại Học An Giang"},
//             {name: "Đại Học Thái Bình Dương"},
//             {name: "Đại Học Cần Thơ"},
//             {name: "Trường Sĩ Quan Thông Tin - Hệ Dân Sự - Đại Học Thông Tin Liên Lạc"},
//             {name: "Đại Học Thể Dục Thể Thao Bắc Ninh"},
//             {name: "Đại học Thành Đô"},
//             {name: "Đại Học Sư Phạm Thể Dục Thể Thao Hà Nội"},
//             {name: "Đại Học Đà Lạt"},
//             {name: "Đại học Thủ Dầu Một"},
//             {name: "Đại Học Thể Dục Thể Thao TPHCM"},
//             {name: "Đại Học Vinh"},
//             {name: "Trường Sĩ Quan Tăng - Thiết Giáp"},
//             {name: "Đại Học Hải Phòng"},
//             {name: "Đại học Y khoa Tokyo Việt Nam"},
//             {name: "Đại Học Hùng Vương"},
//             {name: "Đại học Kiên Giang"},
//             {name: "Đại Học Thủy Lợi (Cơ sở 1)"},
//             {name: "Đại Học Thủy Lợi (Cơ sở 2)"},
//             {name: "Đại Học Thương Mại"},
//             {name: "Đại học Tân Trào"},
//             {name: "Đại Học Nha Trang"},
//             {name: "Đại Học Tây Bắc"},
//             {name: "Đại Học Thể Dục Thể Thao Đà Nẵng"},
//             {name: "Đại Học Tiền Giang"},
//             {name: "Trường Sĩ Quan Thông Tin - Hệ Quân sự - Đại Học Thông Tin Liên Lạc"},
//             {name: "Đại Học Tây Nguyên"},
//             {name: "Đại học Tân Tạo"},
//             {name: "Đại Học Y Khoa Phạm Ngọc Thạch"},
//             {name: "Đại Học Kinh Tế Tài Chính TPHCM"},
//             {name: "Đại học Tài Chính Kế Toán"},
//             {name: "Đại Học Kinh Bắc"},
//             {name: "Đại học Khánh Hòa"},
//             {name: "Đại học Quản lý và công nghệ TPHCM"},
//             {name: "Đại Học Việt Đức"},
//             {name: "Đại Học Công Nghiệp Việt Hung"},
//             {name: "Đại Học Văn Hóa Hà Nội"},
//             {name: "Đại Học Văn Hóa TPHCM"},
//             {name: "Đại học Việt Nhật - Đại học Quốc gia Hà Nội"},
//             {name: "Đại Học Sư Phạm Kỹ Thuật Vĩnh Long"},
//             {name: "Trường Sĩ Quan Kĩ Thuật Quân Sự - Hệ Quân sự - Đại Học Trần Đại Nghĩa"},
//             {name: "Đại Học Võ Trường Toản"},
//             {name: "Đại Học Công Nghiệp Việt Trì"},
//             {name: "Đại Học Xây Dựng Hà Nội"},
//             {name: "Đại Học Xây Dựng Miền Trung"},
//             {name: "Đại Học Y Dược Cần Thơ"},
//             {name: "Đại Học Điều Dưỡng Nam Định"},
//             {name: "Đại học Kỹ thuật Y Dược Đà Nẵng"},
//             {name: "Đại Học Y Dược TPHCM"},
//             {name: "Đại Học Y Hà Nội"},
//             {name: "Phân hiệu Đại học Y Hà Nội tại Thanh Hóa"},
//             {name: "Đại Học Y Khoa Vinh"},
//             {name: "Đại Học Y Dược Hải Phòng"},
//             {name: "Học Viện Quân Y - Hệ Quân sự"},
//             {name: "Đại Học Y Dược Thái Bình"},
//             {name: "Đại Học Y Tế Công Cộng"},
//             {name: "Trường Sĩ Quan Công Binh - Hệ Dân sự - Đại học Ngô Quyền"},
//             {name: "Đại học Văn hóa Nghệ thuật Quân đội"},
//             {name: "Trường Sĩ Quan Kĩ Thuật Quân Sự - Hệ Dân sự - Đại Học Trần Đại Nghĩa"},
//             {name: "Cao Đẳng An Ninh Nhân Dân 1"},
//             {name: "Cao Đẳng An Ninh Nhân Dân 2"},
//             {name: "Cao Đẳng Sư Phạm Hà Giang"},
//             {name: "Cao Đẳng Sư Phạm Cao Bằng"},
//             {name: "Cao Đẳng Sư Phạm Lào Cai"},
//             {name: "Cao Đẳng Sư Phạm Tuyên Quang"},
//             {name: "Cao Đẳng Sư Phạm Lạng Sơn"},
//             {name: "Cao Đẳng Cộng Đồng Bắc Kạn"},
//             {name: "Cao Đẳng Sư Phạm Thái Nguyên"},
//             {name: "Cao Đẳng Sư Phạm Yên Bái"},
//             {name: "Cao Đẳng Sơn La"},
//             {name: "Cao Đẳng Sư Phạm Vĩnh Phúc"},
//             {name: "Cao Đẳng Sư Phạm Quảng Ninh"},
//             {name: "Cao Đẳng Sư Phạm Ngô Gia Tự Bắc Giang"},
//             {name: "Cao Đẳng Sư Phạm Bắc Ninh"},
//             {name: "Cao Đẳng Sư Phạm Hà Tây"},
//             {name: "Cao Đẳng Hải Dương"},
//             {name: "Cao Đẳng Sư Phạm Hưng Yên"},
//             {name: "Cao Đẳng Sư Phạm Hòa Bình"},
//             {name: "Cao Đẳng Sư Phạm Hà Nam"},
//             {name: "Cao Đẳng Sư Phạm Nam Định"},
//             {name: "Cao Đẳng Sư Phạm Thái Bình"},
//             {name: "Cao Đẳng Sư Phạm Nghệ An"},
//             {name: "Cao Đẳng Sư Phạm Quảng Trị"},
//             {name: "Cao Đẳng Sư Phạm Thừa Thiên Huế"},
//             {name: "Cao Đẳng Sư Phạm Kon Tum"},
//             {name: "Cao Đẳng Bình Định"},
//             {name: "Cao Đẳng Sư Phạm Gia Lai"},
//             {name: "Cao Đẳng Sư Phạm Đăk Lăk"},
//             {name: "Cao Đẳng Sư Phạm Nha Trang"},
//             {name: "Cao Đẳng Sư Phạm Đà Lạt"},
//             {name: "Cao Đẳng Sư Phạm Bình Phước"},
//             {name: "Cao Đẳng Sư Phạm Ninh Thuận"},
//             {name: "Đại"},
//             {name: "Cao Đẳng Sư Phạm Tây Ninh"},
//             {name: "Cao Đẳng Bình Thuận"},
//             {name: "Cao Đẳng Sư Phạm Long An"},
//             {name: "Cao Đẳng Sư Phạm Bà Rịa – Vũng Tàu"},
//             {name: "Cao Đẳng Sư Phạm Kiên Giang"},
//             {name: "Cao Đẳng Cần Thơ"},
//             {name: "Cao Đẳng Bến Tre"},
//             {name: "Cao Đẳng Sư Phạm Vĩnh Long"},
//             {name: "Cao Đẳng Sư Phạm Sóc Trăng"},
//             {name: "Cao Đẳng Sư Phạm Cà Mau"},
//             {name: "Cao Đẳng Sư Phạm Điện Biên"},
//             {name: "Cao Đẳng Bán Công Công Nghệ và Quản Trị Doanh Nghiệp"},
//             {name: "Cao Đẳng Bách Khoa Hưng Yên"},
//             {name: "Cao Đẳng Công Nghệ Và Kinh Tế Bảo Lộc"},
//             {name: "Cao Đẳng Y Tế Bạch Mai"},
//             {name: "Cao Đẳng Công Nghệ và Thương Mại Hà Nội"},
//             {name: "Cao Đẳng Bách Việt"},
//             {name: "Cao Đẳng Y Tế Bình Dương"},
//             {name: "Cao Đẳng Công Nghiệp Hóa Chất"},
//             {name: "Cao Đẳng Công Nghiệp Thái Nguyên"},
//             {name: "Cao Đẳng Công Nghiệp Cẩm Phả"},
//             {name: "Cao Đẳng Kỹ Thuật Công Nghiệp"},
//             {name: "Cao Đẳng Công Nghiệp Huế"},
//             {name: "Cao Đẳng Công Nghiệp In"},
//             {name: "Cao Đẳng Kinh Tế Công Nghiệp Hà Nội"},
//             {name: "Cao Đẳng Công Nghệ Thủ Đức"},
//             {name: "Cao Đẳng Công Nghiệp Tuy Hòa"},
//             {name: "Cao Đẳng Kỹ Thuật Công Nghiệp Quảng Ngãi"},
//             {name: "Cao Đẳng Kinh Tế Kỹ Thuật Vinatex TPHCM"},
//             {name: "Cao Đẳng Công Nghiệp Việt Đức"},
//             {name: "Cao Đẳng Công Nghiệp và Xây Dựng"},
//             {name: "Cao Đẳng Công Nghiệp Hưng Yên"},
//             {name: "Cao Đẳng Công Nghệ và Kinh Doanh Việt Tiến"},
//             {name: "Cao Đẳng Cảnh Sát Nhân Dân 1"},
//             {name: "Cao đẳng Cảnh sát Nhân dân II"},
//             {name: "Cao Đẳng Tư Thục Đức Trí"},
//             {name: "Cao Đẳng Kinh Tế Kỹ Thuật Điện Biên"},
//             {name: "Cao đẳng Công Nghệ Thông Tin TPHCM"},
//             {name: "Cao Đẳng Dân Lập Kinh Tế Kỹ Thuật Đông Du Đà Nẵng"},
//             {name: "Cao đẳng Bách khoa Tây Nguyên"},
//             {name: "Cao Đẳng Điện Lực TPHCM"},
//             {name: "Cao Đẳng Du Lịch Hà Nội"},
//             {name: "Cao Đẳng Văn Hóa Nghệ Thuật và Du Lịch Nha Trang"},
//             {name: "Cao Đẳng Mỹ Thuật Trang Trí Đồng Nai"},
//             {name: "Cao Đẳng Nông Lâm Đông Bắc"},
//             {name: "Cao Đẳng Công Kỹ Nghệ Đông Á"},
//             {name: "Cao Đẳng Công Nghệ và Quản Trị Sonadezi"},
//             {name: "Cao Đẳng Xây Dựng Công Trình Đô Thị"},
//             {name: "Cao Đẳng Truyền Hình"},
//             {name: "Cao Đẳng Kinh Tế – Kế Hoạch Đà Nẵng"},
//             {name: "Cao Đẳng Du Lịch và Công Thương"},
//             {name: "Cao Đẳng Dược Phú Thọ"},
//             {name: "Cao Đẳng Viễn Đông"},
//             {name: "Cao Đẳng Y Tế Điện Biên"},
//             {name: "Cao Đẳng Kinh Tế – Kỹ Thuật Cần Thơ"},
//             {name: "Cao Đẳng Công Nghệ Kinh Tế Và Thủy Lợi Miền Trung"},
//             {name: "Cao Đẳng Cơ Điện Và Nông Nghiệp Nam Bộ"},
//             {name: "Cao Đẳng Đại Việt"},
//             {name: "Cao Đẳng Kinh Tế TPHCM"},
//             {name: "Cao Đẳng Công Thương TPHCM"},
//             {name: "Cao Đẳng Kinh Tế-Công Nghệ TPHCM"},
//             {name: "Cao Đẳng Giao Thông Vận Tải II"},
//             {name: "Cao Đẳng Giao Thông Vận Tải Miền Trung"},
//             {name: "Cao Đẳng Giao Thông Vận Tải 3"},
//             {name: "Cao Đẳng Giao Thông Vận Tải TPHCM"},
//             {name: "Cao Đẳng Hàng Hải I"},
//             {name: "Cao Đẳng Công Nghệ Và Kinh Tế Hà Nội"},
//             {name: "Cao Đẳng Cộng Đồng Hà Nội"},
//             {name: "Cao Đẳng Công Nghệ Thông Tin Hữu Nghị Việt Hàn"},
//             {name: "Cao Đẳng Y Tế Hưng Yên"},
//             {name: "Cao Đẳng Kinh Tế Kỹ Thuật Vĩnh Phúc"},
//             {name: "Cao Đẳng Bách Khoa Đà Nẵng"},
//             {name: "Cao Đẳng Kỹ Thuật Cao Thắng"},
//             {name: "Cao Đẳng Kinh Tế Đối Ngoại"},
//             {name: "Cao Đẳng Kinh Tế Kỹ Thuật Kiên Giang"},
//             {name: "Cao Đẳng Cơ Khí Luyện Kim"},
//             {name: "Cao Đẳng Kinh Tế Kỹ Thuật Miền Nam"},
//             {name: "Cao Đẳng Kinh Tế – Kỹ Thuật Hà Nội"},
//             {name: "Cao Đẳng Kinh Tế- Kỹ Thuật Kon Tum"},
//             {name: "Cao Đẳng Kỹ Thuật Lý Tự Trọng TPHCM"},
//             {name: "Cao Đẳng Kinh Tế – Kỹ Thuật Quảng Nam"},
//             {name: "Cao Đẳng Kinh Tế – Tài Chính Thái Nguyên"},
//             {name: "Cao Đẳng Kinh Tế – Tài Chính Vĩnh Long"},
//             {name: "Cao Đẳng Kinh Tế Kỹ Thuật Lâm Đồng"},
//             {name: "Cao Đẳng Cộng Đồng Lào Cai"},
//             {name: "Cao Đẳng Cộng Đồng Lai Châu"},
//             {name: "Cao Đẳng Điện Lực Miền Trung"},
//             {name: "Cao Đẳng Điện Tử - Điện Lạnh Hà Nội"},
//             {name: "Cao Đẳng Lương Thực Thực Phẩm"},
//             {name: "Cao Đẳng Lạc Việt"},
//             {name: "Cao Đẳng Y Tế Lâm Đồng"},
//             {name: "Cao Đẳng Sư Phạm Trung Ương"},
//             {name: "Cao Đẳng Sư Phạm TW Nha Trang"},
//             {name: "Cao Đẳng Sư Phạm Trung Ương TPHCM"},
//             {name: "Cao Đẳng Thương Mại Và Du Lịch Hà Nội"},
//             {name: "Cao Đẳng Múa Việt Nam"},
//             {name: "Cao Đẳng Tài Nguyên và Môi Trường Miền Trung"},
//             {name: "Cao Đẳng Thương Mại"},
//             {name: "Cao Đẳng Công Nghệ Và Môi Trường"},
//             {name: "Cao Đẳng Y Tế Cà Mau"},
//             {name: "Cao Đẳng Hoan Châu"},
//             {name: "Cao Đẳng Văn Hóa Nghệ Thuật Thái Bình"},
//             {name: "Cao Đẳng Ngoại Ngữ – Công Nghệ Việt Nhật"},
//             {name: "Cao Đẳng Công Nghiệp Nam Định"},
//             {name: "Cao Đẳng Công Nghệ Hà Nội"},
//             {name: "Cao Đẳng Nông Nghiệp Nam Bộ"},
//             {name: "Cao Đẳng Nông Nghiệp và Phát Triển Nông Thôn Bắc Bộ"},
//             {name: "Cao Đẳng Nghệ Thuật Hà Nội"},
//             {name: "Cao Đẳng Văn Hóa Nghệ Thuật Việt Bắc"},
//             {name: "Cao Đẳng Y Tế Ninh Bình"},
//             {name: "Cao Đẳng Công Nghệ Và Kỹ Thuật Ô Tô"},
//             {name: "Cao Đẳng Phương Đông -Quảng Nam"},
//             {name: "Cao Đẳng Kinh Tế Kỹ Thuật TP HCM"},
//             {name: "Cao Đẳng Phương Đông – Đà Nẵng"},
//             {name: "Cao Đẳng Kinh Tế Kỹ Thuật Phú Thọ"},
//             {name: "Cao Đẳng Phát Thanh Truyền Hình II"},
//             {name: "Cao Đẳng Phát Thanh Truyền Hình I"},
//             {name: "Cao Đẳng Công Nghiệp Phúc Yên"},
//             {name: "Cao Đẳng Asean"},
//             {name: "Cao Đẳng Thủy Sản"},
//             {name: "Cao Đẳng Công Nghiệp Cao Su"},
//             {name: "Cao Đẳng Đại Việt Sài Gòn"},
//             {name: "Cao Đẳng Cộng Đồng Sóc Trăng"},
//             {name: "Cao Đẳng Thống Kê"},
//             {name: "Cao Đẳng Kinh Tế – Kỹ Thuật Thương Mại"},
//             {name: "Cao Đẳng Thủy Lợi Bắc Bộ"},
//             {name: "Cao Đẳng Thương Mại và Du Lịch"},
//             {name: "Cao Đẳng Thể DụcThể ThaoThanh Hóa"},
//             {name: "Cao Đẳng Công Nghiệp Thực Phẩm"},
//             {name: "Cao Đẳng Tài Chính Hải Quan"},
//             {name: "Cao Đẳng Kinh Tế - Kỹ Thuật Trung Ương"},
//             {name: "Cao Đẳng Văn Hóa Nghệ Thuật Tây Bắc"},
//             {name: "Cao Đẳng Văn Hóa Nghệ Thuật và Du Lịch Hạ Long"},
//             {name: "Cao đẳng Văn Hóa, Thể Thao Và Du Lịch Nguyễn Du"},
//             {name: "Cao Đẳng Văn Hóa Nghệ Thuật Đăk Lăk"},
//             {name: "Cao Đẳng Văn Hóa Nghệ Thuật TPHCM"},
//             {name: "Cao Đẳng Văn Hóa Nghệ Thuật và Du Lịch Sài Gòn"},
//             {name: "Cao Đẳng Công Nghệ Viettronics"},
//             {name: "Cao Đẳng Văn Hóa Nghệ Thuật Nghệ An"},
//             {name: "Cao Đẳng Kỹ Thuật-Công Nghệ Vạn Xuân"},
//             {name: "Cao Đẳng Văn Hóa Nghệ Thuật Du Lịch Yên Bái"},
//             {name: "Cao Đẳng Công Nghệ và Kinh Tế Công Nghiệp"},
//             {name: "Cao Đẳng Xây Dựng Số 1"},
//             {name: "Cao Đẳng Xây Dựng Nam Định"},
//             {name: "Cao Đẳng Xây Dựng Số 2"},
//             {name: "Cao Đẳng Y Tế Đồng Tháp"},
//             {name: "Cao Đẳng Y Tế Bạc Liêu"},
//             {name: "Cao Đẳng Y Tế Cần Thơ"},
//             {name: "Cao Đẳng Y Tế Đồng Nai"},
//             {name: "Cao Đẳng Y Tế Thái Bình"},
//             {name: "Cao Đẳng Y Tế Hải Phòng"},
//             {name: "Cao Đẳng Y Tế Kiên Giang"},
//             {name: "Cao Đẳng Y Tế Hà Nam"},
//             {name: "Cao Đẳng Y Tế Thái Nguyên"},
//             {name: "Cao Đẳng Y Tế Khánh Hòa"},
//             {name: "Cao Đẳng Y Tế Lạng Sơn"},
//             {name: "Cao Đẳng Y Tế Hà Đông"},
//             {name: "Cao Đẳng Y Tế Hà Tĩnh"},
//             {name: "Cao Đẳng Y Tế Phú Thọ"},
//             {name: "Cao Đẳng Y Tế Quảng Ninh"},
//             {name: "Cao Đẳng Y Tế Bình Định"},
//             {name: "Cao Đẳng Dược Trung Ương"},
//             {name: "Cao Đẳng Y Tế Thanh Hóa"},
//             {name: "Cao Đẳng Y Tế Quảng Nam"},
//             {name: "Cao Đẳng Y Tế Tiền Giang"},
//             {name: "Cao Đẳng Y Tế Bình Thuận"},
//             {name: "Cao Đẳng Y Tế Huế"},
//             {name: "Cao Đẳng Y Tế Hà Nội"},
//             {name: "Cao Đẳng Cộng Đồng Hải Phòng"},
//             {name: "Cao Đẳng Cộng Đồng Hà Tây"},
//             {name: "Cao Đẳng Cộng Đồng Đồng Tháp"},
//             {name: "Cao Đẳng Cộng Đồng Kiên Giang"},
//             {name: "Cao Đẳng Cộng Đồng Vĩnh Long"},
//             {name: "Cao Đẳng Cộng Đồng Cà Mau"},
//             {name: "Cao Đẳng Cộng Đồng Hậu Giang"},
//             {name: "Khoa Công Nghệ – Đại Học Đà Nẵng"},
//             {name: "Cao Đẳng Kinh Tế – Kỹ Thuật – Đại Học Thái Nguyên"},
//             {name: "Cao Đẳng Công Nghiệp Quốc Phòng"},
//             {name: "Đại học Công nghệ Thông tin và Truyền thông Việt Hàn - Đại học Đà Nẵng"},
//             {name: "Cao Đẳng Y Tế Sơn La"},
//             {name: "Cao Đẳng Y Tế Trà Vinh"},
//             {name: "Học viện Công giáo Việt Nam"},
//             {name: "Phân hiệu Đại học Thái Nguyên tại Hà Giang"},
//             {name: "Học Viện Dân Tộc"},
//             {name: "Khoa các khoa học liên ngành - ĐH Quốc gia Hà Nội"},
//             {name: "Phân hiệu Đại học Quốc gia TPHCM tại Bến Tre"},
//             {name: "Phân hiệu Đại học Xây dựng miền Trung tại Đà Nẵng"},
//         ])
//        res.status(200).json('Cập nhật dữ liệu thành công')
//     }catch(error){
//        console.log(error)
//        res.status(500).json(error)
//     }
//            try{
//     await  userModel.updateMany({}, {$set: {isVerified: true, emailToken: null}})
//    res.status(200).json('Cập nhật dữ liệu thành công')
// }catch(error){
//    console.log(error)
//    res.status(500).json(error)
// }
// try{
//     await  userModel.updateOne({email: "xuanluyen@gmail.com"}, {$set: {datingCity: null}})
//    res.status(200).json('Cập nhật dữ liệu thành công')
// }catch(error){
//    console.log(error)
//    res.status(500).json(error)
// }
// try{
//         await  userModel.updateMany({}, {$set: {filter: {
//             gender: "",
//             job: "",
//             heightAbove: null,
//             heightBelow: null,
//             weightAbove: null,
//             weightBelow: null,
//             dCityId: "",
//             hCityId: "",
//         }}})
//        res.status(200).json('Cập nhật dữ liệu thành công')
//     }catch(error){
//        console.log(error)
//        res.status(500).json(error)
//     }
// try{
//     await  userModel.updateMany({}, {$set: {filter: {
//         gender: "",
//         job: "",
//         heightAbove: null,
//         heightBelow: null,
//         weightAbove: null,
//         weightBelow: null,
//         dCityId: "",
//         hCityId: "",
//     }}})
//    res.status(200).json('Cập nhật dữ liệu thành công')
// }catch(error){
//    console.log(error)
//    res.status(500).json(error)
// }
//            try{
//     await  userModel.updateMany({}, {$set: {height: null, weight: null}})
//    res.status(200).json('Cập nhật dữ liệu thành công')
// }catch(error){
//    console.log(error)
//    res.status(500).json(error)
// }

// try{
//     await  userModel.updateMany({}, {$set: {bio: null}})
//    res.status(200).json('Cập nhật dữ liệu thành công')
// }catch(error){
//    console.log(error)
//    res.status(500).json(error)
// }
// try{
//     await  userModel.updateMany({}, {$set: {lastSeen: null}})
//    res.status(200).json('Cập nhật dữ liệu thành công')
// }catch(error){
//    console.log(error)
//    res.status(500).json(error)
// }
// try{
//     await  userModel.updateMany({}, {$set: {dob: null}})
//    res.status(200).json('Cập nhật dữ liệu thành công')
// }catch(error){
//    console.log(error)
//    res.status(500).json(error)
// }
// try{
//     await  userModel.updateMany({}, {$set: {matches: [], likedStrangers: [], fans: [], chats: []}})
//    res.status(200).json('Cập nhật dữ liệu thành công')
// }catch(error){
//    console.log(error)
//    res.status(500).json(error)
// }
// try{
//     await  userModel.updateMany({}, {$set: {fans: [], likedStrangers: [], noti: []}} )
//    res.status(200).json('Cập nhật dữ liệu thành công')
// }catch(error){
//    console.log(error)
//    res.status(500).json(error)
// }
try{
    await  Message.deleteMany({})
    await  Chat.deleteMany({})
    await  Noti.deleteMany({})
    await  userModel.updateMany({}, {$set: {fans: [], likedStrangers: [], noti: [], messageNoti: [], matches: [],chats: []}} )
   res.status(200).json('Cập nhật dữ liệu thành công')
}catch(error){
   console.log(error)
   res.status(500).json(error)
}
}
const addHobbies = async(req, res)=>{
    const data = req.body;
    try {
          data?.forEach((item) =>{
            let alt_id = item.id
            let name = item.name
            let image = item.icon

            // cityModel.insertOne({_id: cityId, name: cityName})
            const hobbyDoc = new Hobby({alt_id: alt_id, name: name, image: image })
            hobbyDoc.save()
        })
        res.status(200).json({message: "Lưu dữ liệu thành công"})
    }catch(error){
        res.status(500).json(error)
    }
}
const updateHobbies = async (req, res) => {
    try{
        Hobby.updateOne({name: "ss177"}, {hobbyIds: ["65a8ba9554f2d786cac4b031" ]})
        res.status(200).json("Đã update hobby")
    }catch(error){
        console.log(error)
        res.status(500).json(error)
    }
}
module.exports = {getCities, addCityId, findUser, addHobbies, updateHobbies, addHobbyField}