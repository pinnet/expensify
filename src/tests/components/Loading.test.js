import React from 'react';
import {shallow} from 'enzyme';
import Loading from './../../components/Loading';

it('should render corectly',() => {
    const wrapper = shallow(<Loading />);
    expect(wrapper).toMatchSnapshot();
})