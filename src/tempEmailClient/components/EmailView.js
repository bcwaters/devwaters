import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import InboxSidebar from './InboxSidebar.js'
import TopAppBar from './TopAppBar.js'
import EmailBody from './EmailBody.js'
import Notices from './res/notices.js'

const styles = theme => ({
    root: {
        display: 'flex',
        backgroundColor: '#e9ebee',
    },
    gridContainer: {
        flexGrow: 1 ,
        height: '90vh',
    },
    fillAppBarSpace: theme.mixins.toolbar,
    bannerSpace: {
        height:'150px',
        borderStyle: 'solid'},
    footerSpace: {
        minHeight:'11vh',
        borderStyle: 'solid'},
});


class EmailViewer extends React.Component {
    
    state = {
    emailsReceived: [],  //array of mailobjects
    currentEmail: Notices.welcomeNotice//current mailObject
  };

  constructor(props, context) {
        super(props, context)
        
        this.ContainerRef = React.createRef();
        this.onEmailReceived = this.onEmailReceived.bind(this)
        this.updateCurrentEmail = this.updateCurrentEmail.bind(this)
        this.deleteEmail = this.deleteEmail.bind(this)
    
  }

  componentDidMount() {
      //this directs the socket data to a component function
      this.props.registerHandler(this.onEmailReceived)
      //add timer that sends a notice email to user after 3 seconds
      setTimeout(() => {
            this.addEmailToView(Notices.defaultNotice)
            },
                4 * 1000
        );
    }

  //triggered when socket notifies of a new email
  onEmailReceived(socketData){    
      this.addEmailToView( socketData.email)
    }

  updateCurrentEmail(currentEmail){
      this.setState({currentEmail: currentEmail})
  }

  deleteEmail(index){
      this.setState({currentEmail: Notices.deleteNotice,
                     emailsRecieved: this.state.emailsReceived.splice(index,1)})
  }

  addEmailToView(mailObject){
      this.setState({
            emailsReceived: [...this.state.emailsReceived, mailObject]
        })
  }

  render() {
    const { classes, theme } = this.props;
  
    return (
      <div className={classes.root}>
        <CssBaseline />
        <TopAppBar />
        <Grid container className={classes.gridContainer}>
            <Grid item xs={12} className={classes.fillAppBarSpace}/>
            <Grid item xs={12} className={classes.bannerSpace}>
            banner goes here
            </Grid>
            <Grid item xs={2} >
            <InboxSidebar
                container={this.containerRef}
                emailsReceived={this.state.emailsReceived} 
                setEmailToView={this.updateCurrentEmail} 
                deleteEmail={this.deleteEmail}
             
            /> 
            </Grid>
            <Grid item xs={8}>
            <EmailBody
                currentEmail={this.state.currentEmail}
            />
            </Grid>
            <Grid item xs={12} className={classes.footerSpace}>
            footer stuff goes here
            </Grid>    
        </Grid>
      </div>
    );
  }
}

EmailViewer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(EmailViewer);