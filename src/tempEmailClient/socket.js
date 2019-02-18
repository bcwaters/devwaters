const io = require('socket.io-client')

export default function () {
  //TODO this url needs to be set to env variable to deploy on server
    const socket = io.connect('http://localhost:3000')
   
    function registerNewEmailHandler(doThisWithEmail) {
        console.log('registerHandler called in client socket')
        socket.on('email', doThisWithEmail)
    }
    
    //When the user sets a new email address this functions emits it via socket
    function setMyAddress(newAddress){
        console.log('setAddress() called in client socket')
        socket.emit('newAddress', newAddress)
    }

    return {
        registerNewEmailHandler,
        setMyAddress
    }
}