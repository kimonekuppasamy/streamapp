// GradesAv2020.test.js
import React from 'react';
import { shallow } from 'enzyme';
import GradesAv2020 from './GradesAv2020';
describe("GradesAv2020", () => {
  it("should render my component", () => {
    const wrapper = shallow(<GradesAv2020/>);
  });
});