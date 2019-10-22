import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LegendList from './components/Legends/LegendList';
import Home from './components/Home/Home';


const routes = [
    {
        path: "/legends",
        exact: true,
        main: () => <LegendList/>,
    },
    {
        path: "/",
        exact: true,
        main: () => <Home/>,
    },
];

export default function App() {

    return (
        <Router>
            <div className="page-container">
                <div className="content-wrap">
                    <div className='header-container'>
                        <Header/>
                    </div>
                    <>
                        {routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.main}
                            />
                        ))}
                    </>
                </div>
                <Footer/>
            </div>
            
        </Router>
    )
}