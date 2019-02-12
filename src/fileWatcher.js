import chokidar from 'chokidar'
import fs from 'fs'
const simpleParser = require("mailparser").simpleParser;

class EmailWatcher{
    
    constructor(){
    this.directory = '/tmp/emails/'
    this.watcher = chokidar.watch(this.directory,
                    {ignoreInitial:true,
                     ignored: /[\/\\]\./,
                     awaitWriteFinish:true })

  }
    //Not sure  why i have to include io in here... fix this
    onNewEmail(doThis, io){
        console.log('onNewEmail set')
        //change event is called when new file is written
        this.watcher.on('all', (event, path) => {
        console.log('file path:' + path + 'event: ' + event)
        if(event == 'change'){
            fs.readFile(path,{encoding: 'utf-8'}, function(err,data){
                if (!err) {
                    console.log('received data: ' + data);
                    simpleParser(data)
                .then(parsed => {console.log(parsed.text)})
                .catch(err => {console.log('couldnt parse')});
                    doThis(io, data);
                }else{
                    console.log(err);
                }
                });
            }
        });
    }  
}

export default EmailWatcher