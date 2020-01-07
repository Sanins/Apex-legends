/* eslint-disable no-undef */
import React from "react";
import { shallow } from "enzyme";
import Heading from "./Heading";

describe("<Heading>", () => {
	it("renders as h1", () => {
		const wrapper = shallow(
			<Heading headingType={1}>Heading</Heading>
		);

		const headingClass = wrapper.find(".heading__h1");
		expect(headingClass.exists()).toBe(true);
		expect(wrapper.text()).toBe("Heading");
	});

	it("renders as h2", () => {
		const wrapper = shallow(
			<Heading headingType={2}>Heading</Heading>,
		);

		const headingClass = wrapper.find(".heading__h2");
		expect(headingClass.exists()).toBe(true);
		expect(wrapper.text()).toBe("Heading");
	});

	it("renders as h3", () => {
		const wrapper = shallow(
			<Heading headingType={3}>Heading</Heading>,
		);

		const headingClass = wrapper.find(".heading__h3");
		expect(headingClass.exists()).toBe(true);
		expect(wrapper.text()).toBe("Heading");
	});

	it("renders as h4", () => {
		const wrapper = shallow(
			<Heading headingType={4}>Heading</Heading>,
		);

		const headingClass = wrapper.find(".heading__h4");
		expect(headingClass.exists()).toBe(true);
		expect(wrapper.text()).toBe("Heading");
	});

	it("renders as h5", () => {
		const wrapper = shallow(
			<Heading headingType={5}>Heading</Heading>,
		);

		const headingClass = wrapper.find(".heading__h5");
		expect(headingClass.exists()).toBe(true);
		expect(wrapper.text()).toBe("Heading");
	});

	it("renders as h6", () => {
		const wrapper = shallow(
			<Heading headingType={6}>Heading</Heading>,
		);

		const headingClass = wrapper.find(".heading__h6");
		expect(headingClass.exists()).toBe(true);
		expect(wrapper.text()).toBe("Heading");
	});
});
