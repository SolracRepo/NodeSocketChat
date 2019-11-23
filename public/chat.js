
// WAIT FOR EVERYTHING TO LOAD....
window.addEventListener('DOMContentLoaded', (event) => {
    //MAKE SURE SERVER IS RUNNING ON PORT 8000 

    const socket = io.connect('http://localhost:8000');
    

    var sendButton = document.getElementById('myBtn');
    //handle submit and enterkey

    sendButton.addEventListener('click', (e)=>{
        e.preventDefault();
        e.stopPropagation();
        var userHandle= document.getElementById('userName').value;
        var userMessage = document.getElementById('userMessage').value;
        
        socket.emit('message', {
            userHandle,
            userMessage
        });

    })

    socket.on('messagesToAll', (data)=>{
        
    })





});



