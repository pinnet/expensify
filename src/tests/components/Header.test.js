import React from 'react';
import { shallow } from 'enzyme'; 
import { Header } from '../../components/Header';
import { startLogout } from '../../actions/auth';

it('should render correctly', () => {
 const wrapper = shallow(<Header startLogout={() =>{}} />);
    expect(wrapper).toMatchSnapshot();    
});

it('should logout on button click',() => {
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout} />);
    wrapper.find('button').simulate('click');
    expect(startLogout).toBeCalled();
})