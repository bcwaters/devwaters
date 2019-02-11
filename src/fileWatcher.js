import chokidar from 'chokidar'

const directory = '/tmp/emails/'
const watcher = chokidar.watch(directory, {ignoreInitial:true, ignored: /[\/\\]\./})
watcher.on('all', (event, path) => {
  console.log(event, path);
});

export default watcher