import React from 'react';
import Login from './../../components/Login'
import { shallow } from 'enzyme'; 

it('should render correctly', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper).toMatchSnapshot();   
});
