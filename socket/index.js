// import { Server } from "socket.io"

// const io = new Server({ cors: "http://localhost:5173/" })
// let onlineUsers = []
// io.on("connection", (socket) => {
//   console.log("new connection", socket.id)
//   socket.on("addNewUser", (userId)=>{
//     !onlineUsers.some(user => user.userId == userId) &&
//     onlineUsers.push({
//         userId,
//         socketId: socket.id
//     })
//   })
//   console.log("online users", onlineUsers)
//   io.emit("getOnlineUsers", onlineUsers)
//   //add message
//   socket.on("sendMessage", (message)=>{
//     const user = onlineUsers.find(user => user.userId == message.recipientId)
//     if(user){
//         io.to(user.socketId).emit("getMessage", message)
//         io.to(user.socketId).emit("getNotification", {
//           senderId: message.senderId,
//           isRead:false,
//           date: new Date(),
//         })

//     }
//   })
//   socket.on("disconnect", ()=> {
//     onlineUsers = onlineUsers.filter((user)=>user.socketId !== socket.id)
//     io.emit("getOnlineUsers", onlineUsers)
//   })
// });

// io.listen(3000);

// new code
import { Server } from "socket.io"

// const io = new Server({ cors: "http://localhost:5173/" })
const io = new Server({ cors: "http://192.168.1.218:5173" })

let onlineUsers = []
io.on("connection", (socket) => {
  socket.on("addOnlineUser", (user)=>{ 
    if(!onlineUsers.some((user)=>user.socketId == socket.id)){
      onlineUsers.push({
        ...user,
        socketId: socket.id
    })
    }
    console.log(onlineUsers)
    let onlineUserNames = []
    onlineUsers.length > 0  && onlineUsers.map((user)=>{
      onlineUserNames.push(user?.name)
    })
    console.log(onlineUserNames)
    io.emit("getOnlineUsers", onlineUsers)
  })
  //add message
  socket.on("sendMessage", (message)=>{
    const recipient = onlineUsers.find(onlineUser => onlineUser._id == message.recipientId)
    console.log(message.text)
    if(recipient){
      io.to(recipient.socketId).emit("getMessage", message)
      // io.to(recipient.socketId).emit("getMessageNoti", message)
    }
  })
  socket.on("sendMatchNoti", (noti)=>{
    const recipient = onlineUsers.find(onlineUser => onlineUser._id == noti.recipientId)
    console.log(noti.text)
    if(recipient){
      io.to(recipient.socketId).emit("getMatchNoti", noti)
    }
  })
  socket.on("sendRemoveMatchNoti", (noti)=>{
    const recipient = onlineUsers.find(onlineUser => onlineUser._id == noti.recipientId)
    console.log(noti.text)
    if(recipient){
      io.to(recipient.socketId).emit("getRemoveMatchNoti", noti)
    }
  })
  socket.on("sendLikeNoti", (noti)=>{
    const recipient = onlineUsers.find(onlineUser => onlineUser._id == noti.recipientId)
    console.log(noti.text)
    if(recipient){
      io.to(recipient.socketId).emit("getLikeNoti", noti)
    }
  })
  socket.on("removeFan", (data)=>{
    const recipient = onlineUsers.find(onlineUser => onlineUser._id == data.noti.recipientId)
    if(recipient){
      io.to(recipient.socketId).emit("getRejectNoti", data.noti)
    }
  })
  socket.on("disconnect", ()=> {
    if(onlineUsers.some((user)=>user.socketId == socket.id)){
      onlineUsers = onlineUsers.filter((user)=>user.socketId !== socket.id)
            let onlineUserNames = []
        onlineUsers.map((user)=>{
          onlineUserNames.push(user.name)
        })
        console.log(onlineUserNames)
    }
    io.emit("getOnlineUsers", onlineUsers)
  })
});

io.listen(3000);