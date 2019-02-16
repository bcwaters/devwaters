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

const styles = theme => ({
    fromText: {
        flex:'1 1 auto', 
        padding: '0px', 
        minWidth:'0px'},
    listBorder:{
        borderWidth: '1px 0px 1px 1px',
        borderStyle: 'solid',
        height: '50vh',
        padding: '0px',
    },
    inboxIcon:{
        color:'gold',
        '&:hover': { color: 'DarkGoldenRod'}},
    deleteIcon:{
        color: 'DarkRed',
        '&:hover': { color: 'red'}},
    fillAppBarSpace: {
        display: 'flex',
        alignItems: 'center',
        padding: '0px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
  },
      emailText:{
        textOverflow: 'clip',
        whiteSpace: 'nowrap',
        overflow: 'hidden'
    }
});

class InboxSidebar extends React.Component {
	
	render()
	{
	const { classes } = this.props;

    // for every email in prop create inbox icon, from field, and delete icon
    //TODO update the css for the from field
	return (
        <React.Fragment>
            <div className={classes.fillAppBarSpace}/>
            <div className={classes.fillAppBarSpace}> 
                'Send an email to test@devwaters.com for your viewing pleasure.'
            </div>
            <div className={classes.fillAppBarSpace}/>
      
		  <List className={classes.listBorder}>
                 <ListItem style={{ borderWidth: '0px 0px 1px 0px', 
                                    borderStyle: 'solid'}}>
                    <ListItemText primary='Inbox'/>
                </ListItem>
            {  this.props.emailsReceived.length ==0 ?  
                <ListItem><ListItemText primary='no emails received'/></ListItem>
              :
                this.props.emailsReceived.map((mailObject, index) => (
                <ListItem button key={index} 
                    onClick={()=>this.props.setEmailToView(mailObject)}>
                 <CssBaseline />
                <ListItemText
                    style={{flex:'1 1 auto', padding: '0px', minWidth:'0px', 
                            textOverflow: 'clip',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden'
                            }}
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
      
        </React.Fragment>
        );
	}
}

InboxSidebar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InboxSidebar)