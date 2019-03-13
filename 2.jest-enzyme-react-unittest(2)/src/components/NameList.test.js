import React from 'react';
import { shallow } from 'enzyme';
import NameList from './NameList';

describe('NameList', () => {
  let component = null;

  it('renders correctly', () => {
    component = renderer.create(<NameList names={["김준태", "bosco"]} />);
  });
  
  it('matches snapshot', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});