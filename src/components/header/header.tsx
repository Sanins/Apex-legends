import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Legends from '../legends/Legends';

function Index() {
  return <h2>Home</h2>;
}

function LegendsLink() {
  return <Legends/>;
}

function Users() {
  return <h2>Users</h2>;
}

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/legends/">Legends</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/legends/" component={LegendsLink} />
        <Route path="/users/" component={Users} />
      </div>
    </Router>
  );
}

export default AppRouter;