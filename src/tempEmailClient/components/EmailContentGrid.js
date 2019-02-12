import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1 ,
  },
  HomeText:{
	color: 'black'  
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class EmailContentGrid extends React.Component {
    
    constructor(props, context) {
            super(props, context)

    this.state= {  currentEmail: 'none'};
    
    this.onEmailReceived = this.onEmailReceived.bind(this)
    
  }
	
    componentDidMount() {
        console.log('componenet mounted')
        this.props.registerHandler(this.onEmailReceived)
    }
    
    onEmailReceived(){
        console.log('new email')
        this.setState({currentEmail: 'new email!'})
    }
    
	render() {
		const { classes } = this.props;

    return (
      <Grid container className={classes.root} >
		<Grid item className={classes.root}  xs={12} 
		style={{ minHeight: '30vh' }} >		
		 &nbsp; &nbsp;
			<Typography className={classes.HomeText} variant="h3" component="h2" align="center" >
				Dev Waters email is: {this.state.currentEmail}
			</Typography>
        </Grid>
		
      </Grid>
	  
    );
  }
}

EmailContentGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EmailContentGrid);