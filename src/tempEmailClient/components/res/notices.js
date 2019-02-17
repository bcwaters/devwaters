const Notices = {
    defaultNotice : {
            from: {value: [
                    {
                        name: 'notification',
                        address: 'tips@devwaters.com'
                    }],
                   text :'tips@devwaters.com',
                  },
           
            subject: 'Changing your temporary email address',
            text: 'Your current email address is test@devwaters.com\nClick the change link on the left to create a custom one'} ,

   welcomeNotice : {
            from: {value: [
                    {
                        name: 'Welcome To Temp Mail',
                        address: 'greeter@devwaters.com'
                    }],
                   text :'greeter@devwaters.com',
                  },
           
            subject: 'Welcome',
            text: 'Use the inbox on the left to read your emails'},
    supportNotice : {
            from: {value: [
                    {
                        name: 'Support Temp Mail',
                        address: 'sponsors@devwaters.com'
                    }],
                   text :'sponsors@devwaters.com',
                  },
           
            subject: 'Support our sponsors',
            text: 'Take a look at my affiliates to help keep temp mail free'},
    deleteNotice : {
            from: {text :'help@devwaters.com'},
            subject: 'Email Deleted',
            text: 'Email deleted.'}
}

export default Notices