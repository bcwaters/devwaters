import express from 'express'
import watcher from './fileWatcher.js'
import serverRenderer from './serverRenderer.js'

const PORT = 8080
const app = express()

const router = express.Router()

//route for main app
router.use('^/$', serverRenderer)
router.use(
  express.static('dist', { maxAge: '30d' })
)

//If no route exist reroute to homepage
router.get('*', function(req, res) {
    res.redirect('/');
});

// tell the app to use the above rules
app.use(router)
//TODO set up route for React temp email app


app.listen(PORT, () => {
  console.log(`SSR running on port ${PORT}`)
  console.log(__dirname)
})

