import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LegendList from '../Legends/LegendList';
import './Header.scss';

function Index() {
  return <h2>Home</h2>;
}

function LegendsLink() {
  return <LegendList/>;
}

function Users() {
  return <h2>Users</h2>;
}

function AppRouter() {
  return (
    <Router>
    <div>
      <h1>Apex Legends</h1>
    </div>
        <nav>
          <input type="checkbox" id="nav" className="hidden"/>
          <label className="nav-open"><i></i><i></i><i></i></label>
          <div className="nav-container">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/legends/">Legends</Link></li>
              <li><Link to="/users/">Users</Link></li>
            </ul>
          </div>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/legends/" component={LegendsLink} />
        <Route path="/users/" component={Users} />
    </Router>
  );
}

export default AppRouter;