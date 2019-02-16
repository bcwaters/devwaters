import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const drawerWidth = 270;
const drawerMaxWidth = '40%';
const styles = theme => ({
  root: {
    display: 'flex',
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

class EmailBody extends React.Component {

	render()
	{
	const { classes } = this.props;

	return (
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: true,
          })}
        >
          <div className={classes.drawerHeader} />
            <Typography paragraph>
              {'From: ' + this.props.currentEmail.from.text} 
            </Typography>
            <Typography paragraph>
              {this.props.currentEmail.text} 
            </Typography>
         
        </main>

 );
	}
}

EmailBody.propTypes = { 
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EmailBody)