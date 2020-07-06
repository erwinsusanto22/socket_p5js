var express = require('express');
var app = express();

var server = app.listen(process.env.PORT || 3000);
app.use(express.static('public'));  // static files, means NOT DYNAMIC

// console.log("yumyum runs whoo");

// socket, wahh io = input output
var socket = require('socket.io');
var io = socket(server);

io.sockets.on('connection', newConnection); // socket stuff

function newConnection(socket) {
  // console.log("connection whoo from: " + socket.id);

  socket.on('mouse', mouseMsg); // ambil data mouse yg dikirim dari client, and jalanin func ini

  function mouseMsg(data) {
    socket.broadcast.emit('mouse', data);
    // io.sockets.emeit('mouse', data); // buat kirim ke socket yg lain aja
    // console.log(data);
  }


}
