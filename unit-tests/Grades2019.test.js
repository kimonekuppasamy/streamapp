// Grades2019.test.js
import React from 'react';
import { shallow } from 'enzyme';
import Grades2019 from './Grades2019';
describe("Grades2019", () => {
  it("should render my component", () => {
    const wrapper = shallow(<Grades2019/>);
  });
});