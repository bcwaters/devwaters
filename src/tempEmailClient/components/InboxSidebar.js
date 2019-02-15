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

const styles = theme => ({
    fromText: {primaryTypographyProps: {align: 'center'}},
    
    inboxIcon:{color:'gold',
              '&:hover': { color: 'DarkGoldenRod'}},
    
    deleteIcon: {color: 'DarkRed',
                '&:hover': { color: 'red'}
  },
});

class InboxSidebar extends React.Component {
	
	render()
	{
	const { classes } = this.props;

    // for every email in prop create inbox icon, from field, and delete icon
    //TODO update the css for the from field
	return (
		  <List>{ 
              this.props.emailsReceived.length ==0 ?  
                <ListItem><ListItemText primary='no emails received'/></ListItem>
              :
                this.props.emailsReceived.map((mailObject, index) => (
                <ListItem button key={index} 
                    onClick={()=>this.props.setEmailToView(mailObject)}>
                <ListItemIcon > <InboxIcon className={classes.inboxIcon} /> 
                </ListItemIcon>
                
                <ListItemText className={classes.fromText}
                    primary={'New Mail:   \n' + mailObject.from.value[0].name} />
                
                <ListItemSecondaryAction>
                <ListItemIcon button key={index} 
                        onClick={()=>this.props.deleteEmail(index)}>
                     <DeleteIcon className={classes.deleteIcon} /> 
                </ListItemIcon>
                </ListItemSecondaryAction>
                               
                </ListItem>
            ))}
            </List>
        );
	}
}

InboxSidebar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InboxSidebar)