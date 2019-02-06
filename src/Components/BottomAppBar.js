import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import SvgIcon from '@material-ui/core/SvgIcon';
import customSVG from './ParseSVG.js'


const GitIcon = (props) => (
  <SvgIcon {...props}>
    <path d= {customSVG.githubIcon} />
  </SvgIcon>
);

const styles = theme => ({
  
  paper: {
    paddingBottom: 50,
  },
  
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  toolbar: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
});



function BottomAppBar(props) {
  const { classes } = props;
  return (
      <AppBar  color="primary" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <IconButton color="inherit" aria-label="Open drawer">
            <GitIcon />
          </IconButton>
          
          <div>
            <IconButton color="inherit">
              <SearchIcon />
            </IconButton>
            <IconButton color="inherit">
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
  );
}

BottomAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomAppBar);