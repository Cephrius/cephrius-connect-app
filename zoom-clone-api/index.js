const express = require("express");
const { SocketAddress } = require("net");
const app = express();
const server = require("http").Server(app)
const io = require("socket.io")(server)

const users =[]
const port = 3001

app.get("/", (req, res) => {
    res.send("Hellow World")
})

const addUser = (userName,roomId) => {
    users.push({
        userName: userName,
        roomId: roomId 
    })
    
}

const userLeave = (userName) =>{
    users = users.filter(user => user.userName != userName)
}

const getRoomUsers = (roomId) => {
    return users.filter(user => (user.roomId == roomId))
}

io.on("connection", socket => {
    console.log("Someone connected")
    socket.on("join-room", ({ roomId, userName })=>{
        console.log("User Joined Room")
        console.log(roomId);
        console.log(userName);
        socket.join(roomId);
        addUser(userName, roomId)
        socket.to(roomId).emit("user-connected", userName)

        io.to(roomId).emit("all-users", getRoomUsers(roomId))
  
        socket.on("discconnect", () =>{
            console.log("disconnected");
            socket.leave(roomId);
            userLeave(userName)
            io.to(roomId).emit("all-users", getRoomUsers(roomId))
        })
    })
})

server.listen(port, ()=> {
    console.log('Zoom clone API listing on localhost:3001')
})

