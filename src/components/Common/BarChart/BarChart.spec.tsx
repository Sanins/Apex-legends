/* eslint-disable no-undef */
import React from "react";
import { mount, shallow } from "enzyme";
import BarChart from "./BarChart";
import toJson from "enzyme-to-json";

describe("BarChart", () => {
	it("should fetch data on mount", () => {
		const wrapper = shallow(<BarChart dataValue={50} dataTitle="Headshot dps" />);
		wrapper.update();
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
