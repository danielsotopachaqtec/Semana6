import React from 'react';
import {Text, View, ImageBackground} from 'react-native';
import {shallow} from 'enzyme';
//import {expect} from 'chai';
import {HeaderTitle} from '../../../src/Components/Login/HeaderTitle';

describe('Text', () => {
  it('view wrapper component', () => {
    const text = 'Welcome Back';
    const title = 'sign in to continue';
    const wrapper = shallow(<HeaderTitle text={text} title={title} />);
    expect(wrapper.find(View).length).toBe(1);
    expect(wrapper.find(ImageBackground).length).toBe(1);
    expect(wrapper.props.text).not.toBeNull();
    wrapper.find({testID: 'textMessage'}).forEach((node, index) => {
      expect(node.props().children).toBe(text);
    });
    expect(wrapper.props.title).not.toBeNull();
    wrapper.find({testID: 'titleMessage'}).forEach((node, index) => {
      expect(node.props().children).toBe(title);
    });
    expect(wrapper.find(Text).length).toBe(2);
    // expect(wrapper.text()).toEqual(text);
  });
});
