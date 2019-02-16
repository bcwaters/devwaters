import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import InboxSidebar from './InboxSidebar.js'
import TopAppBar from './TopAppBar.js'
import EmailBody from './EmailBody.js'

const styles = theme => ({
    root: {
        display: 'flex',
    },
    gridContainer: {
    flexGrow: 1 ,
  },
    readContainer: {
        height: '400px,'
    },
    fillAppBarSpace: theme.mixins.toolbar,
});

const defaultNotice = {
            from: {text :'notice@TemporyEmail'},
            text: 'click an email to view'} 

class EmailViewer extends React.Component {
    
    state = {
    emailsReceived: [],  //array of mailobjects
    currentEmail: defaultNotice//current mailObject
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
    }

  //triggered when socket notifies of a new email
  onEmailReceived(socketData){    
      this.addMessageToView( socketData.email)
    }

  updateCurrentEmail(currentEmail){
      this.setState({currentEmail: currentEmail})
  }

  deleteEmail(index){
      this.setState({currentEmail: defaultNotice,
                     emailsRecieved: this.state.emailsReceived.splice(index,1)})
  }

  addMessageToView(msg){
      this.setState({
            emailsReceived: [...this.state.emailsReceived, msg]
        })
  }

  render() {
    const { classes, theme } = this.props;
  
    return (
      <div className={classes.root}>
        <CssBaseline />
        <TopAppBar />
        <Grid container className={classes.gridContainer}>
            <Grid item xs={2} />
            <Grid item xs={2} >
            <InboxSidebar
                container={this.containerRef}
                emailsReceived={this.state.emailsReceived} 
                setEmailToView={this.updateCurrentEmail} 
                deleteEmail={this.deleteEmail}
             
            /> 
            </Grid>
            <Grid item xs={6}>
            <EmailBody
                currentEmail={this.state.currentEmail}
            />
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