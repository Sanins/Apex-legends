/* eslint-disable no-undef */
import React from "react";
import Header from "./Header";
import { shallow } from "enzyme";

describe("Header", () => {

	it("shows mobile navigation in a closed state", () => {
		const wrapper = shallow(
			<Header />
		);

		const hamburgerClosedClass = wrapper.find(".header__mobile-hamburger__close");
		expect(hamburgerClosedClass.exists()).toBe(false);
	});

	it("opens the mobile navigation in an open state", () => {
		const wrapper = shallow(
			<Header />
		);

		wrapper.find(".header__mobile-hamburger").simulate("click");

		const hamburgerClosedClass = wrapper.find(".header__mobile-hamburger__close");
		expect(hamburgerClosedClass.exists()).toBe(true);
	});

	it("opens the mobile navigation in an open state then closes it again", () => {
		const wrapper = shallow(
			<Header />
		);

		wrapper.find(".header__mobile-hamburger").simulate("click");
		wrapper.find(".header__mobile-hamburger__close").simulate("click");

		const hamburgerClosedClass = wrapper.find(".header__mobile-hamburger__close");
		expect(hamburgerClosedClass.exists()).toBe(false);
	});
});
