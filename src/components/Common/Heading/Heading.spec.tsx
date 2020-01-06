/* eslint-disable no-undef */
import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Heading from "./Heading";

describe("<Heading>", () => {
	it("renders as h1", () => {
		const wrapper = shallow(
			<Heading headingType={1}>Heading</Heading>
		);

		expect(toJson(wrapper)).toMatchSnapshot();
		expect(wrapper.hasClass("heading__h1"));
		expect(wrapper.text()).toBe("Heading");
	});

	it("renders as h2", () => {
		const wrapper = shallow(
			<Heading headingType={2}>Heading</Heading>,
		);

		expect(toJson(wrapper)).toMatchSnapshot();
		expect(wrapper.hasClass("heading__h2"));
		expect(wrapper.text()).toBe("Heading");
	});

	it("renders as h3", () => {
		const wrapper = shallow(
			<Heading headingType={3}>Heading</Heading>,
		);

		expect(toJson(wrapper)).toMatchSnapshot();
		expect(wrapper.hasClass("heading__h2"));
		expect(wrapper.text()).toBe("Heading");
	});

	it("renders as h4", () => {
		const wrapper = shallow(
			<Heading headingType={4}>Heading</Heading>,
		);

		expect(toJson(wrapper)).toMatchSnapshot();
		expect(wrapper.hasClass("heading__h2"));
		expect(wrapper.text()).toBe("Heading");
	});

	it("renders as h5", () => {
		const wrapper = shallow(
			<Heading headingType={5}>Heading</Heading>,
		);

		expect(toJson(wrapper)).toMatchSnapshot();
		expect(wrapper.hasClass("heading__h2"));
		expect(wrapper.text()).toBe("Heading");
	});

	it("renders as h6", () => {
		const wrapper = shallow(
			<Heading headingType={6}>Heading</Heading>,
		);

		expect(toJson(wrapper)).toMatchSnapshot();
		expect(wrapper.hasClass("heading__h2"));
		expect(wrapper.text()).toBe("Heading");
	});
});
