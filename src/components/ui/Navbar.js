import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import NavList from './NavList'

const styles = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
  }
};


class ButtonAppBar extends React.Component {
  state = { drawerIsOpen: false }

  handleDrawerOpen = () => {
    this.setState({ drawerIsOpen: true });
  };

  handleDrawerClose = () => {
    this.setState({ drawerIsOpen: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton onClick={this.handleDrawerOpen} className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.flex}>
              chickengoujons.ie - for all your nuggets of information
          </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="persistent"
          classes={{
            paper: classes.drawerPaper,
          }}
          open={this.state.drawerIsOpen}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <div className={classes.drawerInner}>
            < NavList onClick={() => this.handleDrawerClose}/>
          </div>
        </Drawer>
      </div>
    );
  }
}


ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);

