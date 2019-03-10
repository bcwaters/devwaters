import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import tileData from './PortfolioTileData.js'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
   flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

class TitlebarGridList extends React.Component {
	
	render()
	{
	const { classes } = this.props;

	return (
		<div className={classes.root}>
        <GridList cols={1} style={{minHeight: '30vh', width:'100%'}}/>
		<GridList cols={3} className={classes.gridList} spacing={40}>
			{tileData.map(tile => (
				<GridListTile component="a" href={tile.href} key={tile.img}>
					<img src={tile.img} alt={tile.title} />
					<GridListTileBar
					title={tile.title}
					subtitle={<span>library: {tile.author}</span>}
					actionIcon={
						<IconButton href={tile.href} className={classes.icon}>
							<InfoIcon />
						</IconButton>
					}
            />
          </GridListTile>
      
        ))}
      </GridList>
 <GridList cols={1} style={{minHeight: '30vh', width:'100%'}}/>
    </div>
  );
	}
}

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TitlebarGridList)