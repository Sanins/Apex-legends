import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LegendList from "./components/Legends/LegendList/LegendList";
import LegendDetails from "./components/Legends/LegendDetails/LegendDetails";
import WeaponList from "./components/Weapons/WeaponList/WeaponList";
import Home from "./components/Home/Home";
import ItemList from "./components/Items/ItemsList/ItemList";
import Grenades from "./components/Items/Grenades/Grenades";
import Equipment from "./components/Items/Equipment/Equipment";
import Consumables from "./components/Items/Consumables/Consumables";
import Attachments from "./components/Items/Attachments/Attachments";

export default function App() {
	return (
		<Router>
			<Header />
			<main className="wrapper top-offset">
				<Switch>
					<Route exact={true} path="/legends" component={LegendList} />
					<Route path="/legends/:legendId" component={LegendDetails} />
					<Route exact={true} path="/weapons" component={WeaponList} />
					<Route exact={true} path="/items" component={ItemList} />
					<Route exact={true} path="/items/grenades" component={Grenades} />
					<Route exact={true} path="/items/equipment" component={Equipment} />
					<Route exact={true} path="/items/consumables" component={Consumables} />
					<Route exact={true} path="/items/attachments" component={Attachments} />
					<Route exact={true} path={"/"} component={Home} />
				</Switch>
				<Footer />
			</main>
		</Router>
	);
}
