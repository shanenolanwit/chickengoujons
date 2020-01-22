import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import HomeIcon from '@material-ui/icons/Home';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import FunctionsIcon from '@material-ui/icons/Functions';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import SchoolIcon from '@material-ui/icons/School';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function NestedList(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      <ListItem button component={Link} to="/home" onClick={props.onClick()}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button component={Link} to="/goujons" onClick={props.onClick()}>
        <ListItemIcon>
          <RestaurantIcon />
        </ListItemIcon>
        <ListItemText primary="Goujons" />
      </ListItem>
      <ListItem button component={Link} to="/ml" onClick={props.onClick()}>
        <ListItemIcon>
          <FunctionsIcon />
        </ListItemIcon>
        <ListItemText primary="Machine Learning" />
      </ListItem>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <SchoolIcon />
        </ListItemIcon>
        <ListItemText primary="Thesis" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested} component={Link} to="/thesis" onClick={props.onClick()}>
            <ListItemIcon>
              <HelpOutlineIcon />
            </ListItemIcon>
            <ListItemText primary="Outline" />
          </ListItem>
          <ListItem button className={classes.nested} component={Link} to="/thesis" onClick={props.onClick()}>
            <ListItemIcon>
              <CloudQueueIcon />
            </ListItemIcon>
            <ListItemText primary="Architecture" />
          </ListItem>
          <ListItem button className={classes.nested} component={Link} to="/thesis" onClick={props.onClick()}>
            <ListItemIcon>
              <MenuBookIcon />
            </ListItemIcon>
            <ListItemText primary="Papers" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}
