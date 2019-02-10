const express = require('express');
const bodyParser = require('body-parser');
const chokidar = require('chokidar');

const app = express();
const port = process.env.PORT || 8080;

var watcher = chokidar.watch('./emails/', {ignored: /^\./, persistent: true});

watcher
  .on('add', function(path) {console.log('File', path, 'has been added');})
  .on('change', function(path) {console.log('File', path, 'has been changed');})
  .on('unlink', function(path) {console.log('File', path, 'has been removed');})
  .on('error', function(error) {console.error('Error happened', error);})
  
  
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
