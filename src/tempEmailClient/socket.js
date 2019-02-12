const io = require('socket.io-client')

export default function () {
  const socket = io.connect('http://localhost:3000')
   
  
  function registerHandler(emailReceived) {
    socket.on('email', emailReceived)
  }
    
    return {
        registerHandler
    }
}