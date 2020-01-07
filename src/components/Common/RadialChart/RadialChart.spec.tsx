/* eslint-disable no-magic-numbers */
/* eslint-disable no-undef */
import RadialChart from "./RadialChart";
import React from "react";
import { act } from "react-dom/test-utils";
import { mount } from "enzyme";

jest.useFakeTimers();

describe("RadialChart", () => {
	const second = 1000;

	it("should bring back the correct values when calculating the strokedasharray", () => {
		const radius = 80;
		const progress = 80;
		const circleRadius = Math.min(radius, 85);
		const circumference = 2 * 3.14 * circleRadius;
		const strokeLength = circumference / 100 * progress;

		const wrapper = mount(
			<RadialChart
				progress={progress}
				colorTotal="#000"
				colorProgress="#43655A"
				radius={radius}
				strokeWidth={14}
				dimension={140}
				titleText={"DMG"}
				valueText={30}
			/>
		);
		act(() => {
			jest.advanceTimersByTime(second);
		});
		wrapper.update();
		expect(wrapper.find(".radial-chart-progress").prop("strokeDasharray")).toEqual(`${strokeLength},${circumference}`);
	});
});
