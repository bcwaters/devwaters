const io = require('socket.io-client')

export default function () {
    //this url needs to be set to env variable to deploy on server
  const socket = io.connect('http://localhost:3000')
   
  function registerHandler(emailReceived) {
    socket.on('email', emailReceived)
  }
    
    return {
        registerHandler
    }
}