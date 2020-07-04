import React from 'react';
import {Text} from 'react-native';
import {shallow} from 'enzyme';
// import Login from '../../src/Scenes/Login';
// import Test from '../../src/Resource/Functions/Test';

describe('Text', () => {
  it('renders text', () => {
    const wrapper = shallow(<Text>Hello, world</Text>);
    expect(wrapper.text()).toEqual('Hello, world');
  });
});
