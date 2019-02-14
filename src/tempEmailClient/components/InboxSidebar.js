import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

class InboxSidebar extends React.Component {
	
	render()
	{
	const { classes } = this.props;

	return (
		  <List>{ 
              this.props.emailsReceived.length ==0 ?  
                <ListItem><ListItemText primary='no emails received'/></ListItem>
              :
                this.props.emailsReceived.map((mailObject, index) => (
                <ListItem button key={index} 
                                onClick={
                                ()=>this.props.parentCallback(mailObject.text)}
                                >
                    <ListItemIcon> <InboxIcon /> </ListItemIcon>
                    <ListItemText primary={'Email from: ' + mailObject.from.value[0].name} />
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