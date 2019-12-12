import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LegendList from './components/Legends/LegendList/LegendList';
import LegendDetails from './components/Legends/LegendDetails/LegendDetails';
import WeaponList from './components/Weapons/WeaponList';
import WeaponDetails from './components/Weapons/WeaponDetails';
import Home from './components/Home/Home';

export default function App() {
    return (
        <Router>
            <div className="page-container">
                <div className="content-wrap">
                    <Header/>
                    <>
                        <Switch>
                            <Route exact={true} path='/legends' component={LegendList} />
                            <Route path='/legends/:legendId' component={LegendDetails} />
                            <Route exact={true} path='/weapons' component={WeaponList} />
                            <Route path={'/weapons/:weaponId'} component={WeaponDetails} />
                            <Route exact={true} path={'/'} component={Home} />
                        </Switch>
                    </>
                </div>
                <Footer/>
            </div>
        </Router>
    )
}