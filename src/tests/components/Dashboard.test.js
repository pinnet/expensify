import React from 'react';
import { shallow } from 'enzyme'; 
import Dashboard from './../../components/Dashboard';

it('should render correctly', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper).toMatchSnapshot();    
});