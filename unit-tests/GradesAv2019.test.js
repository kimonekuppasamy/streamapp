// GradesAv2019.test.js
import React from 'react';
import { shallow } from 'enzyme';
import GradesAv2019 from './GradesAv2019';
describe("GradesAv2019", () => {
  it("should render my component", () => {
    const wrapper = shallow(<GradesAv2019/>);
  });
});