/* eslint-disable no-undef */
import React from "react";
import WeaponFilter from "./WeaponFilter";
import { shallow } from "enzyme";

describe("Header", () => {

	const emptyHandler = jest.fn();

	it("should not show mobile navigation on load", () => {
		const wrapper = shallow(
			<WeaponFilter
				submit={emptyHandler}
				sortByChange={emptyHandler}
				weaponTypeChange={emptyHandler}
				weaponType={"weaponType"}
				sortByValue={"sortByValue"}
				error={false}
			/>
		);

		const weaponFilterMobileMenu = wrapper.find(".weapon-filter--show");
		expect(weaponFilterMobileMenu.exists()).toBe(false);
	});

	it("opens the mobile navigation when btn clicked", () => {
		const wrapper = shallow(
			<WeaponFilter
				submit={emptyHandler}
				sortByChange={emptyHandler}
				weaponTypeChange={emptyHandler}
				weaponType={"weaponType"}
				sortByValue={"sortByValue"}
				error={false}
			/>
		);

		wrapper.find(".weapon-filter__mobile-btn").simulate("click");

		const weaponFilterMobileMenu = wrapper.find(".weapon-filter--show");
		expect(weaponFilterMobileMenu.exists()).toBe(true);
	});
});
