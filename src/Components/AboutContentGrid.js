import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import oceanImage from '../res/img/oceans.png'

const styles = theme => ({
  root: {
    flexGrow: 1,
	 backgroundImage: 'url(' + oceanImage + ')',
	 backgroundRepeat: 'no-repeat'
  },
  bio:{
	color: '#fffde4'  
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class MainContentGrid extends React.Component {
	
	state = {
		height: 80,
	};

	//TODO add a function to change the height upon clicking an element
	handleChange = key => (event, value) => {
		this.setState({
			[key]: value,
		});
	};

	render() {
		const { classes } = this.props;
		const { spacing } = this.state;

    return (
      <Grid container className={classes.root} spacing={0} alignItems="center" justify="center">
        <Grid item xs={6} style={{ minHeight: this.state.height+'vh' }}>		
			<Typography className={classes.bio} variant="h5" component="h2">
				Welcome to Dev Waters
			</Typography>
        </Grid>
      </Grid>
	  
    );
  }
}

MainContentGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainContentGrid);