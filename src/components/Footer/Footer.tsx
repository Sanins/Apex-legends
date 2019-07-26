import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Footer.scss';

function AppRouter() {
  return (
    <Router>
        <ul className="footer">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/legends/">Legends</Link></li>
            <li><Link to="/users/">Users</Link></li>
        </ul>
    </Router>
  );
}

export default AppRouter;