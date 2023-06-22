const express = require("express");
const { SocketAddress } = require("net");
const app = express();
const server = require("http").Server(app)
const io = require("socket.io")(server)

const port = 3001

app.get("/", (req, res) => {
    res.send("Hellow World")
})

io.on("connected", socket => {
    console.log("Someone is connected")
    socket.on("join-room", ({ roomId, userName })=>{
        console.log("User Joined Room")
        console.log(roomId);
        console.log(userName)
    })
})

server.listen(port, ()=> {
    console.log('Zoom clone API listing on localhost:3001')
})

