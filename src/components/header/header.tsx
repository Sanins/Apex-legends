import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LegendList from '../Legends/LegendList';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

function Index() {
  return <h2>Home</h2>;
}

function LegendsLink() {
  return <LegendList/>;
}

function Users() {
  return <h2>Users</h2>;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

function AppRouter() {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              <Link to='/legends/'>Legends</Link>
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>

      <Route path="/" exact component={Index} />
      <Route path="/legends/" component={LegendsLink} />
      <Route path="/users/" component={Users} />
    </Router>
  );
}

export default AppRouter;