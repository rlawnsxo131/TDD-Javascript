import React from 'react';
import { shallow } from 'enzyme';
import Counter from './Counter';

describe('Counter', () => {
  let component = null;
  
  it('renders correctly', () => {
    component = shallow(<Counter />);
  });

  it('matches sanpshot', () => {
    expect(component).toMatchSanpShot();
  });
});