import * as React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import { TeamsTabConfig } from "../TeamsTabConfig";

describe("TeamsTabConfig Component", () => {
    // Snapshot Test Sample
    it("should match the snapshot", () => {
        const wrapper = shallow(<TeamsTabConfig />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    // Component Test Sample
    it("should render the tab", () => {
        const component = shallow(<TeamsTabConfig />);
        const divResult = component.containsMatchingElement(<div>Configure your tab</div>);

        expect(divResult).toBeTruthy();
    });
});
