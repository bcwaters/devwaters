import express from 'express'
import FileWatcher from './fileWatcher.js'
import serverRenderer from './serverRenderer.js'
import tempEmailRenderer from './tempEmailRenderer.js'

const PORT = 8080
const app = express()
const EmailWatcher = new FileWatcher()



const router = express.Router()
//route for main app ^/$ is regular expression for end of string
router.use('^/$', serverRenderer)


//Create simple react app for real time viewing of emails
router.use('/tempEmail', tempEmailRenderer)
router.use(
  express.static('dist', { maxAge: '30d' })
)

//If no route exist reroute to homepage
router.get('*', function(req, res) {
    res.redirect('/');
});

// tell the app to use the above rules
app.use(router)

//Set up socket io
const server = require('http').createServer(app);
const io = require('socket.io')(server);
io.on('connection', () => { console.log('socketConnected') });
server.listen(3000);

//Link socket to filewatcher event
EmailWatcher.onNewEmail(
    //upon new email use io to emit data to client                   
    (socketServer, newEmail) => 
    {socketServer.emit('email', { email: newEmail } )}, io)

app.listen(PORT, () => {
  console.log(`SSR running on port ${PORT}`)
  console.log(__dirname)
})

