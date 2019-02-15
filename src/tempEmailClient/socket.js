const io = require('socket.io-client')

export default function () {
  //TODO this url needs to be set to env variable to deploy on server
  const socket = io.connect('http://localhost:3000')
   
  function registerNewEmailHandler(doThisWithEmail) {
    socket.on('email', doThisWithEmail)
  }
    
    return {
        registerNewEmailHandler
    }
}