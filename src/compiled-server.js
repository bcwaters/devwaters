"use strict";

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

var _express = _interopRequireDefault(require("express"));

var _react = _interopRequireDefault(require("react"));

var _server = _interopRequireDefault(require("react-dom/server"));

var _App = _interopRequireDefault(require("./client/App.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bodyParser = require('body-parser');

var chokidar = require('chokidar');

var watcher = chokidar.watch(__dirname + '/emails', {
  ignoreInitial: true,
  ignored: /[\/\\]\./
});
watcher.on('all', function (event, path) {
  console.log(event, path);
});
var PORT = 8080;
var app = (0, _express.default)();

var router = _express.default.Router();

var serverRenderer = function serverRenderer(req, res, next) {
  _fs.default.readFile(_path.default.resolve('../dist/index.html'), 'utf8', function (err, data) {
    if (err) {
      console.error(err);
      return res.status(500).send('An error occurred');
    }

    return res.send(data.replace('<div id="root"></div>', "<div id=\"root\">".concat(_server.default.renderToString(_react.default.createElement(_App.default, null)), "</div>")));
  });
};

router.use('^/$', serverRenderer);
router.use(_express.default.static(_path.default.resolve(__dirname, '..', 'dist'), {
  maxAge: '30d'
})); // tell the app to use the above rules

app.use(router); // app.use(express.static('./build'))

app.listen(PORT, function () {
  console.log("SSR running on port ".concat(PORT));
});
/*

app.use(express.static('dist'));

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/emailRelay', (req, res) => {
    res.send('Load react directory watching app here');
});

app.get('*',function (req, res) {
        res.redirect('/');
    });
*/
