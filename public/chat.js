
// WAIT FOR EVERYTHING TO LOAD....
window.addEventListener('DOMContentLoaded', (event) => {
    //MAKE SURE SERVER IS RUNNING ON PORT 8000 

    const socket = io.connect('http://localhost:8000');

    var messageAppend = document.getElementById('messageBox');
    var messageBox = document.getElementById('userMessage');
    

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

        messageBox.value = "";

    })

    socket.on('messagesToAll', (data)=>{
        messageAppend.innerHTML += '<p>' + data.userHandle + ':<span>' + data.userMessage + '</span></p>'
        // messageAppend.append(`${data.userHandle}: ${data.userMessage}`)
    })

    // messageAppend.innerHTML = '<p>';


    // END OF CONTENT LOADED
});



