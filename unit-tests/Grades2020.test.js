// Grades2020.test.js
import React from 'react';
import { shallow } from 'enzyme';
import Grades2020 from './Grades2020';
describe("Grades2020", () => {
  it("should render my component", () => {
    const wrapper = shallow(<Grades2020/>);
  });
});