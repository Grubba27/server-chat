const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const cors = require('cors');
app.use(cors({ origin: 'https://chat-app-eight-delta.vercel.app/'}));

io.on('connection', (socket) => {
  socket.on('message', (msg) => {
    console.log(msg)
    io.emit('message', msg)
  })
});

server.listen(4444, () => {
  console.log('Started listing')
})
