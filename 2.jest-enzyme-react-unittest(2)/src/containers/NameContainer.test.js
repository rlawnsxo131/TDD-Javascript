import React from 'react';
import {Provider} from 'react-redux';
import { mount } from 'enzyme';
import NamesContainer from './NamesContainer';
import configureStore from '../store/configureStore';

describe('NamesContainer', () => {
  let component = null;

  // 이번엔 실제 store 로 테스팅을 한다.
  let store = configureStore();

  it('renders properly', () => {
    component = mount(
      <Provider store={store}>
        <NamesContainer />
      </Provider>
    );
  });

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('dispatches CHANGE_INPUT action', () => {
    const mockedEvent = {
      target: {
        value: 'world'
      }
    };
    component.find('input').simulate('change', mockedEvent);
    expect(store.getState().names.input).toBe('world');
  });

  it('dispatches INSERT action', () => {
    component.find('form').simulate('submit');
    expect(store.getState().names.names).toEqual(['world']);
  });
});
