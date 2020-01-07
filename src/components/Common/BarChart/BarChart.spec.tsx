/* eslint-disable no-magic-numbers */
/* eslint-disable no-undef */
import BarChart from "./BarChart";
import React from "react";
import { act } from "react-dom/test-utils";
import { mount } from "enzyme";

jest.useFakeTimers();

describe("BarChart", () => {
	const second = 1000;
	const dataValue = 50;

	it("should bring back a value of 0 when the page first loads", () => {
		const trueValue = 0;
		const wrapper = mount(<BarChart dataValue={dataValue} dataTitle="Damage per second" />);
		expect(wrapper.find(".bar-chart__svg__live-data").prop("width")).toEqual(trueValue);
	});

	it("should bring back the correct width when using the dataTitle 'Damage per second'", () => {
		const highestValue = 255;
		const trueValue = `${((dataValue / highestValue) * 100).toFixed(2) }%`;

		const wrapper = mount(<BarChart dataValue={dataValue} dataTitle="Damage per second" />);
		act(() => {
			jest.advanceTimersByTime(second);
		});
		wrapper.update();
		expect(wrapper.find(".bar-chart__svg__live-data").prop("width")).toEqual(trueValue);
	});

	it("should bring back the correct width when using the dataTitle 'Headshot damage'", () => {
		const highestValue = 110;
		const trueValue = `${((dataValue / highestValue) * 100).toFixed(2) }%`;

		const wrapper = mount(<BarChart dataValue={dataValue} dataTitle="Headshot damage" />);
		act(() => {
			jest.advanceTimersByTime(second);
		});
		wrapper.update();
		expect(wrapper.find(".bar-chart__svg__live-data").prop("width")).toEqual(trueValue);
	});

	it("should bring back the correct width when using the dataTitle 'Legshot damage'", () => {
		const highestValue = 44;
		const trueValue = `${((dataValue / highestValue) * 100).toFixed(2) }%`;

		const wrapper = mount(<BarChart dataValue={dataValue} dataTitle="Legshot damage" />);
		act(() => {
			jest.advanceTimersByTime(second);
		});
		wrapper.update();
		expect(wrapper.find(".bar-chart__svg__live-data").prop("width")).toEqual(trueValue);
	});

	it("should bring back the correct width when using the dataTitle 'Damage per mag'", () => {
		const highestValue = 660;
		const trueValue = `${((dataValue / highestValue) * 100).toFixed(2) }%`;

		const wrapper = mount(<BarChart dataValue={dataValue} dataTitle="Damage per mag" />);
		act(() => {
			jest.advanceTimersByTime(second);
		});
		wrapper.update();
		expect(wrapper.find(".bar-chart__svg__live-data").prop("width")).toEqual(trueValue);
	});

	it("should bring back the correct width when using the dataTitle 'Average dps/sec'", () => {
		const highestValue = 255;
		const trueValue = `${((dataValue / highestValue) * 100).toFixed(2) }%`;

		const wrapper = mount(<BarChart dataValue={dataValue} dataTitle="Average dps/sec" />);
		act(() => {
			jest.advanceTimersByTime(second);
		});
		wrapper.update();
		expect(wrapper.find(".bar-chart__svg__live-data").prop("width")).toEqual(trueValue);
	});

	it("should bring back the correct width when using the dataTitle 'Headshot dps'", () => {
		const highestValue = 400;
		const trueValue = `${((dataValue / highestValue) * 100).toFixed(2) }%`;

		const wrapper = mount(<BarChart dataValue={dataValue} dataTitle="Headshot dps" />);
		act(() => {
			jest.advanceTimersByTime(second);
		});
		wrapper.update();
		expect(wrapper.find(".bar-chart__svg__live-data").prop("width")).toEqual(trueValue);
	});

	it("should bring back the correct width when using the dataTitle 'Legshot dps'", () => {
		const highestValue = 200;
		const trueValue = `${((dataValue / highestValue) * 100).toFixed(2) }%`;

		const wrapper = mount(<BarChart dataValue={dataValue} dataTitle="Legshot dps" />);
		act(() => {
			jest.advanceTimersByTime(second);
		});
		wrapper.update();
		expect(wrapper.find(".bar-chart__svg__live-data").prop("width")).toEqual(trueValue);
	});
});
