/* eslint-disable no-undef */
import React from "react";
import { mount, render } from "enzyme";
import BarChart from "./BarChart";
import toJson from "enzyme-to-json";
import { act } from "react-dom/test-utils";

jest.useFakeTimers();

describe("BarChart", () => {
	it("should bring back the width value 12.50%", () => {
		const wrapper = mount(<BarChart dataValue={50} dataTitle="Headshot dps" />);
		act(() => {
			// eslint-disable-next-line no-magic-numbers
			jest.advanceTimersByTime(1000);
			wrapper.update();
			const svg = wrapper.find("bar-chart__svg__live-data");
			expect(svg.find("width").length).toEqual("12.5%");
		});
	});
});
