const express = require('express');
const bodyParser = require('body-parser');
const chokidar = require('chokidar');
const util = require('util')
const app = express();
const port = process.env.PORT || 8080;

var watcher = chokidar.watch(__dirname+'/emails', {ignoreInitial:true, ignored: /[\/\\]\./})
watcher.on('all', (event, path) => {
  console.log(event, path);
});
console.log('watcher made' )
var testObj = {test:'test'}
var dirList = watcher.getWatched();
console.log(__dirname)
console.log(util.inspect(testObj, {showHidden: false, depth: null}))
console.log('direcotry watched is: '+ util.inspect(dirList) )
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('dist'));

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/emailRelay', (req, res) => {
    res.send('Load react directory watching app here');
});

app.get('*',function (req, res) {
        res.redirect('/');
    });
