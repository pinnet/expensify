import React from 'react';
import { shallow } from 'enzyme'; 
import Header from './../../components/Header';

it('should render correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h1').length).toBe(1);


  // const renderer =  new ReactShallowRenderer();
  //    renderer.render(<Header/>);
  //       expect(renderer.getRenderOutput()).toMatchSnapshot();
});