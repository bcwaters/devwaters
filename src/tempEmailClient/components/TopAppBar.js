import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

//zIndex put appbar priority above drawer 
const styles = theme => ({
   appBar: {
        zIndex: theme.zIndex.drawer + 1,
        },
});



class TopAppBar extends React.Component {

	render()
	{
	const { classes } = this.props;

	return (
            <React.Fragment>
            <AppBar position="fixed"
                    className={classes.appBar}
            >
                <Toolbar disableGutters={false}>
                    <Typography variant="h6" color="inherit" noWrap>
                    Temp Email Viewer
                    </Typography>
                </Toolbar>
            </AppBar>
            </React.Fragment>
        
        );
	}
}

TopAppBar.propTypes = { 
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TopAppBar)