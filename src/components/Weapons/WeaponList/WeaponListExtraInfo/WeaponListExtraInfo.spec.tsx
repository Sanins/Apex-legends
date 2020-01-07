/* eslint-disable no-undef */
import React from "react";
import WeaponListExtraInfo from "./WeaponListExtraInfo";
import { shallow } from "enzyme";

describe("Header", () => {
	it("should not open the extra information container on load", () => {
		const wrapper = shallow(
			<WeaponListExtraInfo
				averageDps={100}
				headshotDps={50}
				legshotDps={30}
			/>
		);

		const extraInfoContainer = wrapper.find(".weapon-list-extra-info__paragraph");
		expect(extraInfoContainer.exists()).toBe(false);
	});

	it("opens the extra information container when btn clicked", () => {
		const wrapper = shallow(
			<WeaponListExtraInfo
				averageDps={100}
				headshotDps={50}
				legshotDps={30}
			/>
		);

		wrapper.find(".weapon-list-extra-info__link").simulate("click");

		const extraInfoContainer = wrapper.find(".weapon-list-extra-info__paragraph");
		expect(extraInfoContainer.exists()).toBe(true);
	});
});
