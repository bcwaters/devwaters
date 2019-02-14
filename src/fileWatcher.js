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
    onNewEmail(emitEmailEvent, SocketServer){
        //change event is called when new file is written
        this.watcher.on('all', (event, path) => {
            if(event == 'change'){
                fs.readFile(path,{encoding: 'utf-8'}, 
                    function(err,data){
                    if (!err) {
                            simpleParser(data)
                            .then(parsedData => {
                               
                                 emitEmailEvent(SocketServer, parsedData);  
                            })
                                .catch(
                                err => {console.log('couldnt parse sneding raw data')
                                emitEmailEvent(SocketServer, {text :data});});
                        
                    }else{
                    console.log(err);
                    }
                });
            }
        });
    }  
}

export default EmailWatcher