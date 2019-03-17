import React from 'react';
import { shallow } from 'enzyme';
import Counter from './Counter';

describe('Counter', () => {
  let component = null;
  const mockIncrease = jest.fn();
  const mockDecrease = jest.fn();
  
  it('renders correctly', () => {
    component = shallow(<Counter value={700} onIncrease={mockIncrease} onDecrease={mockDecrease}/>);
  });

  it('matches sanpshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('is 700', () => {
    /* 현재는 이렇게하면 안됨
       expect(component.find('h2').at(0).text(), '700'); */
    expect(component.find('h2').at(0).text()).toBe('700');
  });

  it('calls functions', () => {
    const buttons = component.find('button');
    buttons.at(0).simulate('click');
    buttons.at(1).simulate('click');
    expect(mockIncrease.mock.calls.length).toBe(1);
    expect(mockDecrease.mock.calls.length).toBe(1);
  })
});
