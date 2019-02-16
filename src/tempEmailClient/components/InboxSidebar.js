import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DeleteIcon from '@material-ui/icons/DeleteForever';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';

const drawerWidth = 270;
const drawerMaxWidth = '40%';
const styles = theme => ({
    fromText: {
        flex:'1 1 auto', 
        padding: '0px', 
        minWidth:'0px'},

    inboxIcon:{
        color:'gold',
        '&:hover': { color: 'DarkGoldenRod'}},
    deleteIcon:{
        color: 'DarkRed',
        '&:hover': { color: 'red'}},
    drawer: {
        width: drawerWidth,
        maxWidth: drawerMaxWidth,
        flexShrink: 0},
    drawerPaper: {
        width: drawerWidth,
        maxWidth: drawerMaxWidth,},
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
  },
});

class InboxSidebar extends React.Component {
	
	render()
	{
	const { classes } = this.props;

    // for every email in prop create inbox icon, from field, and delete icon
    //TODO update the css for the from field
	return (
        <React.Fragment>
        <Drawer
          className={classes.drawer}
          variant="permanent"
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
		  <List>{ 
              this.props.emailsReceived.length ==0 ?  
                <ListItem><ListItemText primary='no emails received'/></ListItem>
              :
                this.props.emailsReceived.map((mailObject, index) => (
                <ListItem button key={index} 
                    onClick={()=>this.props.setEmailToView(mailObject)}>
                <ListItemIcon > <InboxIcon className={classes.inboxIcon} /> 
                </ListItemIcon>
                 <CssBaseline />
                <ListItemText
                    style={{flex:'1 1 auto', padding: '0px', minWidth:'0px'}}
                    primary={mailObject.from.value[0].name}
                    secondary={ mailObject.from.value[0].address} />
                
                <ListItemSecondaryAction>
                <ListItemIcon button key={index} 
                    style={{display: 'inline-flex',
                            flexShrink: '0',
                            marginLeft: '16px',
                            marginRight: '0px'
                            }}
                    onClick={()=>this.props.deleteEmail(index)}>
                     <DeleteIcon className={classes.deleteIcon} /> 
                </ListItemIcon>
                </ListItemSecondaryAction>
                               
                </ListItem>
            ))}
            </List>
        <Divider />
        </Drawer>
        </React.Fragment>
        );
	}
}

InboxSidebar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InboxSidebar)