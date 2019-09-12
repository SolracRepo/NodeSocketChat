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
    console.log(socket)
    //all available methods for socket
})

app.get('/', (req, res)=> {
    res.send('holla back yall')
})
