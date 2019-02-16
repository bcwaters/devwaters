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
  fillAppBarSpace : theme.mixins.toolbar,
  content: {
    whiteSpace:'pre',
    flexGrow: 1,
    marginLeft: 0,
  },
    emailContainer: {
         borderWidth: '1px',
        borderStyle: 'solid',
        height: '50vh',
    },
    fromField: {
        ...theme.mixins.listItemText,
        borderWidth: '0px 0px 1px 0px',
        borderStyle: 'solid'
    }
});

class EmailBody extends React.Component {

	render()
	{
	const { classes } = this.props;

	return (
        <main className={classes.content}>
            <div className={classes.fillAppBarSpace} />
            <div className={classes.fillAppBarSpace} />
            <div className={classes.fillAppBarSpace} />
            <div className={classes.emailContainer}>
                <div className={classes.fromField} >
                    <Typography noWrap={true} variant='h6'>
                        {'From: ' + this.props.currentEmail.from.text} 
                    </Typography>
                    <Typography noWrap={true} variant='subtitle2'>
                        {'Subject: ' + this.props.currentEmail.from.text} 
                    </Typography>
                </div>
                <Typography paragraph>
                {this.props.currentEmail.text} 
                </Typography>
            </div>
        </main>

 );
	}
}

EmailBody.propTypes = { 
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EmailBody)