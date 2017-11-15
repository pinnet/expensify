import React from 'react';
import { shallow } from 'enzyme'; 
import ErrorPage from '../../components/ErrorPage';

it('should render correctly', () => {
    const wrapper = shallow(<ErrorPage />);
    expect(wrapper).toMatchSnapshot();   
});