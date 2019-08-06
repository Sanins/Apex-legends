import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LegendList from './components/Legends/LegendList';

const routes = [
    {
        path: "/legends",
        exact: true,
        main: () => <LegendList/>,
    },
];

export default function App() {

    return (
        <Router>
            <div className='header-container'>
                <Header/>
            </div>
            <div className='content'>
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                ))}
            </div>
            <Footer/>
        </Router>
    )
}