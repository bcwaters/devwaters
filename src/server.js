import express from 'express'
import serverRenderer from './serverRenderer.js'
import MongoDB from './MongoDB.js'

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


MongoDB.createCollection('comments')
MongoDB.insertComment({text: 'This is a comment that has been inserted into the mongoDB. it was the first comment to be inserted.'})
MongoDB.insertComment({text: 'This is another comment. 2nd one inserted'})
MongoDB.insertComment({text: 'This is the 3rd comment. Adding filler to make it longer\n\n\n\n\n\alsdfladksf;akjsdf;lakjsdf;lasdf fadsjladfkjs;asdkfj;asfdas'})

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

