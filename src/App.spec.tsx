/* eslint-disable no-undef */
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Attachments from "./components/Items/Attachments/Attachments";
import Consumables from "./components/Items/Consumables/Consumables";
import Equipment from "./components/Items/Equipment/Equipment";
import Grenades from "./components/Items/Grenades/Grenades";
import Home from "./components/Home/Home";
import LegendList from "./components/Legends/LegendList/LegendList";
import WeaponList from "./components/Weapons/WeaponList/WeaponList";
import { shallow } from "enzyme";
import LegendDetails from "./components/Legends/LegendDetails/LegendDetails";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<App />, div);
	ReactDOM.unmountComponentAtNode(div);
});

it("routes /legends to LegendList", () => {
	const component = shallow(<App/>);
	expect(component.find("Route[exact=true][path='/legends']").first().prop("component")).toBe(LegendList);
});

it("routes /legends/:legendId to LegendDetails", () => {
	const component = shallow(<App/>);
	expect(component.find("[path='/legends/:legendId']").first().prop("component")).toBe(LegendDetails);
});

it("routes /weapons to WeaponList", () => {
	const component = shallow(<App/>);
	expect(component.find("Route[exact=true][path='/weapons']").first().prop("component")).toBe(WeaponList);
});

it("routes /items/grenades to Grenades", () => {
	const component = shallow(<App/>);
	expect(component.find("Route[exact=true][path='/items/grenades']").first().prop("component")).toBe(Grenades);
});

it("routes /items/equipment to Equipment", () => {
	const component = shallow(<App/>);
	expect(component.find("Route[exact=true][path='/items/equipment']").first().prop("component")).toBe(Equipment);
});

it("routes /items/consumables to consumables", () => {
	const component = shallow(<App/>);
	expect(component.find("Route[exact=true][path='/items/consumables']").first().prop("component")).toBe(Consumables);
});

it("routes /items/consumables to attachments", () => {
	const component = shallow(<App/>);
	expect(component.find("Route[exact=true][path='/items/attachments']").first().prop("component")).toBe(Attachments);
});

it("routes / to Home", () => {
	const component = shallow(<App/>);
	expect(component.find("Route[exact=true][path='/']").first().prop("component")).toBe(Home);
});
