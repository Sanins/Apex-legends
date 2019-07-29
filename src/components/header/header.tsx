import React from 'react';
import { Link } from "react-router-dom";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import { List, ListItem, ListItemText } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    flexContainer: {
      display: 'none',
    },
    displayOpen: {
      display: 'flex',
    },
    fullHeight: {
      height: '100vh',
      overflowX: 'hidden', 
      overflowY: 'auto',
    },
    [theme.breakpoints.up('sm')]: {
      menuButton: {
        display: 'none',
      },
      flexContainer: {
        display: 'flex',
        flexDirection: 'row',
        padding: 0,
      },
      fullHeight: {
        height: 'initial',
      }
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
			display: 'none',
    },
  }),
);

function Header() {
  const [openHamburger, setOpenHamburger] = React.useState(false);

  const classes = useStyles();

  const handleOpenHamburger = () => {
    if (!openHamburger) {
      setOpenHamburger(true);
    } else {
      setOpenHamburger(false);
    }
  };
  
  return (
    <AppBar 
      position="static"
      className={clsx(classes.appBar, openHamburger && classes.fullHeight)}
    >
      <Toolbar>
        <IconButton 
          aria-label='Open drawer'
          className={clsx(classes.menuButton)}
          color="inherit" 
          edge="start" 
          onClick={handleOpenHamburger}
        >
          <MenuIcon />
        </IconButton>
        <List className={clsx(classes.flexContainer, openHamburger && classes.displayOpen)} component="nav">
          <ListItem component={Link} to="/">
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem component={Link} to="/legends/">
            <ListItemText primary="Legends" />
          </ListItem>
        </List>
      </Toolbar>
    </AppBar>
  );
}

export default Header;