import express from 'express'
import serverRenderer from './serverRenderer.js'
import MongoDB from './mongoDB.js'

const PORT = 8082
const app = express()

const router = express.Router()
//route for main app ^/$ is regular expression for end of string
router.use('^/$', serverRenderer)

//Create simple react app for real time viewing of emails
router.use(
  express.static('dist', { maxAge: '30d' })
)
router.get('/api/callMongo', (req, res) => {
    //call DB and send data
    MongoDB.getComments('somewhere.com', (result)=>{res.json(result)})
})


//If no route exist reroute to homepage
router.get('*', function(req, res) {
    res.redirect('/');
});

// tell the app to use the above rules
app.use(router)

//Set up socket io
const server = require('http').createServer(app);
const io = require('socket.io')(server);

//server.listen(3000);
app.listen(PORT, () => {
  console.log(`SSR running on port ${PORT}`)
  console.log(__dirname)
})

