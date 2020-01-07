/* eslint-disable no-undef */
import React from "react";
import WeaponTypeFilters from "./WeaponTypeFilters";
import { shallow } from "enzyme";

describe("Header", () => {
	const emptyHandler = jest.fn();

	it("should not open the weapon-type-filters on load", () => {
		const wrapper = shallow(
			<WeaponTypeFilters
				assaultRifles={emptyHandler}
				subMachineGuns={emptyHandler}
				lightMachineGuns={emptyHandler}
				shotguns={emptyHandler}
				sniperRifles={emptyHandler}
				pistols={emptyHandler}
				activeWeapon={1}
			/>
		);

		const weaponTypeFilters = wrapper.find(".weapon-type-filters__show");
		expect(weaponTypeFilters.exists()).toBe(false);
	});

	it("should open the weapon-type-filters on click", () => {
		const wrapper = shallow(
			<WeaponTypeFilters
				assaultRifles={emptyHandler}
				subMachineGuns={emptyHandler}
				lightMachineGuns={emptyHandler}
				shotguns={emptyHandler}
				sniperRifles={emptyHandler}
				pistols={emptyHandler}
				activeWeapon={1}
			/>
		);

		wrapper.find(".mobile-dropdown-btn").simulate("click");

		const extraInfoContainer = wrapper.find(".weapon-type-filters__show");
		expect(extraInfoContainer.exists()).toBe(true);
	});
});
