import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import InboxSidebar from './InboxSidebar.js'

const drawerWidth = 280;
const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
});

class EmailViewer extends React.Component {
    
    state = {
    emailsReceived: [],  //array of mailobjects
    currentEmail: {text: 'click an email to view'} //current mailObject
  };

  constructor(props, context) {
            super(props, context)

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
      this.setState({currentEmail: 'click an email to view',
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
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: true,
          })}
        >
          <Toolbar disableGutters={false}>
            <Typography variant="h6" color="inherit" noWrap>
              Temp Email Viewer
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={true}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            Inbox
          </div>
          <Divider />
            <InboxSidebar 
                emailsReceived={this.state.emailsReceived} 
                setEmailToView={this.updateCurrentEmail} 
                deleteEmail={this.deleteEmail}
            />
          <Divider />
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: true,
          })}
        >
          <div className={classes.drawerHeader} />
          <Typography paragraph>
              {this.state.currentEmail.text} 
          </Typography>
         
        </main>
      </div>
    );
  }
}

EmailViewer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(EmailViewer);