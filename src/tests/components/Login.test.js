import React from 'react';
import { Login } from './../../components/Login'
import { shallow } from 'enzyme'; 

it('should render correctly', () => {
    const wrapper = shallow(<Login startLogin={() => {}}/>);
    expect(wrapper).toMatchSnapshot();   
});

it('should login on button click',() => {
    const startLogin = jest.fn();
    const wrapper = shallow(<Login startLogin={startLogin} />);
    wrapper.find('button').simulate('click');
    expect(startLogin).toBeCalled();
})