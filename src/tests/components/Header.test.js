import React from 'react';
import { shallow } from 'enzyme'; 
import toJSON from 'enzyme-to-json';
import Header from './../../components/Header';

it('should render correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  // expect(wrapper.find('h1').text()).toBe('Expensify');
  // const renderer =  new ReactShallowRenderer();
  //    renderer.render(<Header/>);
  //      
});