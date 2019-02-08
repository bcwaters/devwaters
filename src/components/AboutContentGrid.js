import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import oceanImage from '../res/img/oceans.png';
import skyImage from '../res/img/sky.png'
import waterImage from '../res/img/water.png'

/*
 backgroundImage: 'url(' + oceanImage + ')',
	 backgroundRepeat: 'no-repeat',
	 backgroundSize: 'cover',
*/
const styles = theme => ({
  root: {
    flexGrow: 1 ,
  },
  skyTextContainer:{
		backgroundImage: 'url(' + skyImage + ')',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
  },
  waterTextContainer:{
		backgroundImage: 'url(' + waterImage + ')',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
  },
  HomeText:{
	color: '#fffde4'  
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class MainContentGrid extends React.Component {
	
	state = {
		height: 0,
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
      <Grid container className={classes.root} >
		<Grid item className={classes.skyTextContainer}  xs={12} 
		style={{ minHeight: '20vh' }} >		
		 &nbsp; &nbsp;
			<Typography className={classes.HomeText} variant="h3" component="h2" align="center" >
				Dev Waters
			</Typography>
        </Grid>
		<Grid item className={classes.waterTextContainer} xs={12} style={{ minHeight: '30vh' }} >
			&nbsp; 	&nbsp; 	&nbsp;	&nbsp;
			<Typography className={classes.HomeText} variant="h5" component="h2" align="center">
			 Software Solutions	<br/>
			 Websites			<br/>		
			 Mobile Apps			<br/>
			 Automation		<br/>
			 And More!		<br/>
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