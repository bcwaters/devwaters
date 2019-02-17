const Notices = {
    defaultNotice : {
            from: {value: [
                    {
                        name: 'notice@TemporaryEmail',
                        address: 'notice@TemporaryEmail'
                    }],
                   text :'notice@TemporyEmail',
                  },
           
            subject: 'Changing your temporary email address',
            text: 'Your current email address is test@devwaters.com\nClick the change link to create a custom one'} ,

   welcomeNotice : {
            from: {value: [
                    {
                        name: 'notice@TemporaryEmail',
                        address: 'notice@TemporaryEmail'
                    }],
                   text :'notice@TemporyEmail',
                  },
           
            subject: 'Welcome',
            text: 'Use the inbox on the left to read your emails'},

    deleteNotice : {
            from: {text :'notice@TemporyEmail'},
            subject: 'Email Deleted',
            text: 'Email deleted.'}
}

export default Notices