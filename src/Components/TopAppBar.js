import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
	  marginLeft: 20,
	  marginRight: 20
  },
  navLink: {
	  marginLeft: 20,
	  marginRight: 20
  }, 
   menuButton: {
    marginLeft: 20,
    marginRight: 20,
  },
};

const AboutLink = props => <RouterLink to="/About" {...props} />
const PortfolioLink = props => <RouterLink to="/Portfolio" {...props} />
const ArticleLink = props => <RouterLink to="/Articles" {...props} />

function TopAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link component={AboutLink}variant="h6" color="inherit" className={classes.navLink}>
            Home
          </Link>
		   <Link component={PortfolioLink} variant="h6" color="inherit" className={classes.navLink}>
            Portfolio
          </Link>
		  <Link component={ArticleLink} variant="h6" color="inherit" className={classes.grow}>
            Articles
          </Link>
		  <Button color="inherit">Client Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

TopAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopAppBar);