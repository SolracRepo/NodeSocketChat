const express = require('express');
const app = express();
const socket = require('socket.io');

const server = app.listen(8000, ()=> {
    console.log(`LISTENING ON PORT 8000`)
})

//USING STATIC FILES
app.use(express.static('public'))

// socket hook

var io = socket(server)

io.on('connection', function(socket) {
    console.log(`CONNECTION MADE WITH: ${socket.id}`)
    //all available methods for socket

    socket.on('message', (data)=> {
        console.log('message recived')
        console.log(data);
         io.sockets.emit('messagesToAll', data)
    })
})



