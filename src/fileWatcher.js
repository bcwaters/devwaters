import chokidar from 'chokidar'



class EmailWatcher{
    
    constructor(){
    this.directory = '/tmp/emails/'
    this.watcher = chokidar.watch(this.directory, {ignoreInitial:true, ignored: /[\/\\]\./})

  }
    
    //Not sure  why i have to include io in here... fix this
    onNewEmail(doThis, io){
        console.log('onNewEmail set')
        this.watcher.on('all', (event, path) => {
            doThis(io);
        });
    }
    
}

export default EmailWatcher