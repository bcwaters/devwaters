import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import hackerImage from '../res/img/hackerimage.jpg'

const styles = theme => ({
  root: {
    flexGrow: 1,
	 backgroundImage: 'url(' + hackerImage + ')'
  },
  bio:{
	color: 'white'  
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class MainContentGrid extends React.Component {
  state = {
    spacing: '16',
  };

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

        <Grid item xs={6} style={{ minHeight: '70vh' }}>
			
				<Typography className={classes.bio} variant="h5" component="h3">
				Welcome to Dev Waters
					</Typography>
					<Typography className={classes.bio} component="p">
					My name is Brent and I am a Software Developer
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