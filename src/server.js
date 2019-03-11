import express from 'express'
import serverRenderer from './serverRenderer.js'
import MongoDB from './mongoDB.js'
MongoDB.setTestCollection();

const PORT = 8082
const app = express()
app.use(express.json())


//
//CORS middleware
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}


const router = express.Router()
//route for main app ^/$ is regular expression for end of string
router.use('^/$', serverRenderer)

//Create simple react app for real time viewing of emails
router.use(
  express.static('dist', { maxAge: '30d' })
)


router.get('/api/getComments', (req, res) => {
    //call DB and send data
    MongoDB.getComments('somewhere.com', (result)=>{res.json(result)})
})

app.get('/download/universalCommentExtension.zip', function(req, res){
  var file = __dirname + '/universalCommentChromeExtension-beta.zip';
  res.download(file); // Set disposition and send it.
});

/**
*   post a comment to the rest server
*   the post data is formatted in json
*   ex: {  originUrl : 'url_to_leave_comment_on.com',
*            comment : { user: 'bob', text:'coment text', commentAge: TimeCommentMade }
*        }
*       MongoDB.insertComment(post.data.originUrl, post.data.comment)  //url is collectionName
*
*/
router.post('/api/addComment', (req, res) => {
   
    //req.on('data', function(data) {
       MongoDB.insertComment(req.body, 'comments')
        //console.log(req.body)
         res.end();
   // })  
})


//If no route exist reroute to homepage
router.get('*', function(req, res) {
    res.redirect('/');
});

// tell the app to use the above rules
app.use(allowCrossDomain)
app.use(router)

//Set up socket io
const server = require('http').createServer(app);
const io = require('socket.io')(server);

//server.listen(3000);
app.listen(PORT, () => {
  console.log(`SSR running on port ${PORT}`)
  console.log(__dirname)
})

